import Fuse from 'fuse.js';
import * as Mustache from 'mustache';
import * as Mark from 'mark.js';

declare global {
  interface Window { fuseOptions: any; }
}

export class Search {
  public fuseOptions: any;

  private fuse: any;

  public results: HTMLElement;

  public stat: HTMLElement;

  public resultContentWordCount: number = 240;

  public highlightOptions = {
    element: 'span',
    className: 'search-keyword',
  };

  public tmplMissingKeywords: string;

  public tmplNoResults: string;

  public tmplStat: string;

  public tmplResult: string;

  public input: HTMLInputElement;

  public title: string;

  constructor(public form: HTMLFormElement) {
  }

  init() {
    this.title = document.title;
    this.results = document.getElementById('searchResults');
    this.stat = document.getElementById('searchStat');
    this.tmplMissingKeywords = document.getElementById('templateMissingKeywords').innerHTML;
    this.tmplNoResults = document.getElementById('templateNoResults').innerHTML;
    this.tmplStat = document.getElementById('templateStat').innerHTML;
    this.tmplResult = document.getElementById('templateResult').innerHTML;
    this.initForm();
    this.initFuse();
  }

  initFuse() {
    const instance = this;
    this.fuseOptions = window.fuseOptions;
    console.debug(instance.fuseOptions);
    const xhr = new XMLHttpRequest();
    xhr.onreadystatechange = () => {
      if (xhr.readyState === 4) {
        if (xhr.status !== 200) {
          console.error({ error: xhr.statusText });
          return;
        }
        const pages = xhr.response;
        instance.fuse = new Fuse(pages, instance.fuseOptions);
        instance.search(instance.input.value);
      }
    };
    xhr.responseType = 'json';
    xhr.open('GET', document.head.querySelector('meta[data-name="search-index"]').getAttribute('content'), true);
    xhr.send(null);
  }

  initForm() {
    this.input = this.form.querySelector('input[name="q"]');
    if (this.input.value === '') {
      this.input.value = Search.getKeywordFromURL();
    }
    const instance = this;
    this.form.addEventListener('submit', (event) => {
      Search.handleSubmit(event, instance);
    });
  }

  static handleSubmit(event, instance: Search) {
    instance.search(instance.input.value);
    event.preventDefault();
  }

  static getKeywordFromURL() {
    return new URLSearchParams(window.location.search).get('q');
  }

  search(query: string) {
    this.results.innerHTML = ''; // Clear previous results.
    this.setPage(query);
    const results = this.fuse.search(query);
    console.debug({ results });
    if (results.length > 0) {
      this.poplateResults(results);
    } else {
      this.stat.innerHTML = this.tmplNoResults;
    }
  }

  setPage(query) {
    const title = `${query} - ${this.title}`;
    const url = `${window.location.pathname}?q=${encodeURIComponent(query)}`;
    window.history.pushState(null, title, url);
    document.title = title; // history.pushState's title was ignored.
  }

  poplateResults(results: any) {
    this.stat.innerHTML = Mustache.render(this.tmplStat, { total: results.length });
    const instance = this;
    results.forEach((result, idx) => {
      const titleKeywords = [];
      const contentKeywords = [];
      result.matches.forEach((match) => {
        match.indices.forEach((index) => {
          const keyword = match.value.substring(index[0], index[1] + 1);
          switch (match.key) {
            case 'title':
              titleKeywords.push(keyword);
              break;
            case 'content':
              contentKeywords.push(keyword);
              break;
            default:
          }
        });
      });
      let { content } = result.item;
      if (content.length > instance.resultContentWordCount) {
        let contentStart = 0;
        if (contentKeywords.length > 0) {
          const pos = content.indexOf(contentKeywords[0]);
          if ((pos + contentKeywords[0].length) > instance.resultContentWordCount - 1) {
            contentStart = pos;
          }
        }
        content = `${(contentStart === 0 ? '' : '...') + content.substring(contentStart, contentStart + instance.resultContentWordCount)}...`;
      }
      const id = `searchResult${idx}`;
      instance.results.insertAdjacentHTML('beforeend', Mustache.render(instance.tmplResult, {
        title: result.item.title,
        content,
        id,
        permalink: result.item.permalink,
      }));
      instance.highlight(id, titleKeywords, contentKeywords);
    });
  }

  highlight(id, titleKeywords, contentKeywords) {
    const titleHighlighter = new Mark(document.querySelectorAll(`#${id} .search-result-title`));
    titleHighlighter.mark(titleKeywords, this.highlightOptions);
    const contentHighlighter = new Mark(document.querySelectorAll(`#${id} .search-result-content`));
    contentHighlighter.mark(contentKeywords, this.highlightOptions);
  }
}

export default Search;
