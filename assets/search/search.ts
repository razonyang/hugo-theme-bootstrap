import Fuse from 'fuse.js';
import Mustache from 'mustache';
import Mark from 'mark.js/dist/mark.js';

declare global {
  interface Window {
    fuseOptions;
    searchResultContentWordCount: number;
    searchPaginate: number;
    searchIndex: string;
  }
}

export class Search {
  public fuseOptions;

  private fuse;

  public resultsElement: HTMLElement;

  public stat: HTMLElement;

  public resultContentWordCount: number;

  public highlightOptions = {
    element: 'span',
    className: 'text-primary',
  };

  public tmplMissingKeywords: string;

  public tmplNoResults: string;

  public tmplStat: string;

  public tmplResult: string;

  public input: HTMLInputElement;

  public searchBarInput: HTMLInputElement;

  public title = '';

  public paginate = 10;

  private page = 1;

  private results;

  private loading = false;

  private loadingSpinner: HTMLElement;

  public loadMore: HTMLElement;

  constructor(public form: HTMLFormElement) {}

  run() {
    this.title = document.title;
    this.resultsElement = document.getElementById('searchResults');
    this.stat = document.getElementById('searchStat');
    this.loadingSpinner = document.getElementById('loadingSpinner');
    this.tmplMissingKeywords = document.getElementById(
      'templateMissingKeywords'
    ).innerHTML;
    this.tmplNoResults = document.getElementById('templateNoResults').innerHTML;
    this.tmplStat = document.getElementById('templateStat').innerHTML;
    this.tmplResult = document.getElementById('templateResult').innerHTML;
    this.resultContentWordCount = window.searchResultContentWordCount;
    this.paginate = window.searchPaginate;
    this.initForm();
    this.initFuse();

    this.loadMore = document.getElementById('btnLoadMore');
    this.loadMore.addEventListener('click', () => {
      this.poplateResults();
    });
  }

  initFuse() {
    this.fuseOptions = window.fuseOptions;
    console.debug('Fuse options', this.fuseOptions);
    const xhr = new XMLHttpRequest();
    xhr.onreadystatechange = () => {
      if (xhr.readyState === 4) {
        if (xhr.status !== 200) {
          console.error({ error: xhr.statusText });
          return;
        }
        const pages = xhr.response;
        this.fuse = new Fuse(pages, this.fuseOptions);
        this.search(this.input.value);
      }
    };
    xhr.responseType = 'json';
    xhr.open('GET', window.searchIndex, true);
    xhr.send(null);
  }

  initForm() {
    this.input = this.form.querySelector('input[name="q"]');
    this.searchBarInput = document.querySelector('.search-bar input[name="q"]');
    if (this.input.value === '') {
      this.input.value = Search.getKeywordFromURL();
    }
    this.updateSearchbar(this.input.value);
    document.querySelector('.search-bar input');
    this.form.addEventListener('submit', (event) => {
      this.handleSubmit(event);
    });
  }

  handleSubmit(event) {
    this.search(this.input.value);
    this.updateSearchbar(this.input.value);
    event.preventDefault();
  }

  updateSearchbar(value) {
    if (this.searchBarInput) {
      this.searchBarInput.value = value;
    }
  }

  static getKeywordFromURL() {
    return new URLSearchParams(window.location.search).get('q');
  }

  hideLoadMoreBtn() {
    this.loadMore.classList.add('d-none');
  }

  showLoadMoreBtn() {
    this.loadMore.classList.remove('d-none');
  }

  hideLoadingSpinner() {
    if (!this.loadingSpinner.classList.contains('d-none')) {
      this.loadingSpinner.classList.add('d-none');
    }
  }

  showLoadingSpinner() {
    this.loadingSpinner.classList.remove('d-none');
  }

  search(query: string) {
    this.showLoadingSpinner();
    this.resultsElement.innerHTML = ''; // Clear previous results.
    if (query === '') {
      this.stat.innerHTML = this.tmplMissingKeywords;
      this.hideLoadMoreBtn();
      this.hideLoadingSpinner();
      return;
    }
    this.page = 1;
    this.setPage(query);
    const results = this.fuse.search(query);
    console.debug({ results });
    this.results = results;
    this.hideLoadingSpinner();
    if (this.results.length > this.paginate) {
      this.showLoadMoreBtn();
    } else {
      this.hideLoadMoreBtn();
    }
    if (results.length > 0) {
      this.poplateResults();
    } else {
      this.stat.innerHTML = this.tmplNoResults;
    }
  }

  setPage(query) {
    const title = (query ? `${query} - ` : '') + this.title;
    const url = `${window.location.pathname}?q=${encodeURIComponent(query)}`;
    window.history.pushState(null, title, url);
    document.title = title; // history.pushState's title was ignored.
  }

  static normalizeTaxonomy(text, render) {
    return render(text).toLowerCase().replaceAll(' ', '-');
  }

  poplateResults() {
    if (!this.results) {
      return;
    }
    if (this.loading) {
      return;
    }
    this.loading = true;
    this.loadMore.setAttribute('disabled', '');
    this.stat.innerHTML = Mustache.render(this.tmplStat, {
      total: this.results.length,
    });
    let i = (this.page - 1) * this.paginate;
    let count = 0;
    for (
      ;
      i < this.results.length && count < this.paginate;
      i += 1, count += 1
    ) {
      const result = this.results[i];
      const idx = (this.page - 1) * this.paginate + i;
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
      if (content.length > this.resultContentWordCount) {
        let contentStart = 0;
        if (contentKeywords.length > 0) {
          const pos = content.indexOf(contentKeywords[0]);
          if (
            pos + contentKeywords[0].length >
            this.resultContentWordCount - 1
          ) {
            contentStart = pos;
          }
        }
        content = `${
          (contentStart === 0 ? '' : '...') +
          content.substring(
            contentStart,
            contentStart + this.resultContentWordCount
          )
        }...`;
      }
      const id = `searchResult${idx}`;
      this.resultsElement.insertAdjacentHTML(
        'beforeend',
        Mustache.render(this.tmplResult, {
          title: result.item.title,
          content,
          id,
          img: result.item.img,
          smallImg: result.item.smallImg,
          largeImg: result.item.largeImg,
          permalink: result.item.permalink,
          categories: result.item.categories,
          authors: result.item.authors,
          tags: result.item.tags,
          series: result.item.series,
          score: Search.formatScore(result.score),
          date: result.item.date,
          url() {
            return Search.normalizeTaxonomy;
          },
        })
      );
      this.highlight(id, titleKeywords, contentKeywords);
    }
    this.loading = false;
    this.loadMore.removeAttribute('disabled');
    if (this.results.length <= this.paginate * this.page) {
      this.hideLoadMoreBtn();
    } else {
      this.showLoadMoreBtn();
    }
    this.page += 1;
    const event = document.createEvent('HTMLEvents');
    event.initEvent('hbs:viewer:update');
    document.dispatchEvent(event);
  }

  static formatScore(value) {
    return (100 * (1 - value)).toFixed(1);
  }

  highlight(id, titleKeywords, contentKeywords) {
    const titleHighlighter = new Mark(
      document.querySelectorAll(`#${id} .search-result-title`)
    );
    titleHighlighter.mark(titleKeywords, this.highlightOptions);
    const contentHighlighter = new Mark(
      document.querySelectorAll(`#${id} .search-result-content`)
    );
    contentHighlighter.mark(contentKeywords, this.highlightOptions);
  }
}

export default Search;
