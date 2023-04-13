import Mark from "mark.js/dist/mark.js";
import Mustache from "mustache";
import Engine from "./engine";
import Form from "./form";
import {default as params} from '@params';

export class Search {
  public resultsElement: HTMLElement;

  public stat: HTMLElement;

  public highlightOptions = {
    element: "span",
    className: "text-primary",
  };

  public tmplMissingKeywords: string;

  public tmplNoResults: string;

  public tmplStat: string;

  public tmplResult: string;

  private page = 1;

  private results;

  private loading = false;

  private loadingSpinner: HTMLElement;

  public loadMore: HTMLElement;

  private title = "";

  private form: Form;
  private engine: Engine;
  private meta = '';

  constructor(form: HTMLFormElement) {
    this.meta = document.querySelector('meta[name="search-meta"]').getAttribute('content');

    this.form = new Form(form, (data: FormData) => {
      this.search(data);
    });
    this.engine = new Engine(this.form, (data: FormData) => {
      this.search(data);
    });
    this.title = document.title;
  }

  run() {
    this.resultsElement = document.getElementById("searchResults");
    this.stat = document.getElementById("searchStat");
    this.loadingSpinner = document.getElementById("loadingSpinner");
    this.tmplMissingKeywords = document.getElementById(
      "templateMissingKeywords"
    ).innerHTML;
    this.tmplNoResults = document.getElementById("templateNoResults").innerHTML;
    this.tmplStat = document.getElementById("templateStat").innerHTML;
    this.tmplResult = document.getElementById("templateResult").innerHTML;

    this.loadMore = document.getElementById("btnLoadMore");
    this.loadMore.addEventListener("click", () => {
      this.showLoadingSpinner();
      this.poplateResults().finally(() => {
        this.hideLoadingSpinner();
      });
    });



    fetch(this.meta)
      .then((response) => {
        return response.json();
      })
      .then((data) => {
        for (const i in data) {
          const datalist = document.querySelector(`#${i}-list`);
          const terms = data[i];
          for (const j in terms) {
            const option = document.createElement("option");
            option.value = terms[j];
            datalist.appendChild(option);
          }
        }
      })
      .catch((err) => {
        console.error("unable to load search meta index", err);
      });
  }

  hideLoadMoreBtn() {
    this.loadMore.classList.add("d-none");
  }

  showLoadMoreBtn() {
    this.loadMore.classList.remove("d-none");
  }

  hideLoadingSpinner() {
    if (!this.loadingSpinner.classList.contains("d-none")) {
      this.loadingSpinner.classList.add("d-none");
    }
  }

  showLoadingSpinner() {
    this.loadingSpinner.classList.remove("d-none");
  }

  search(data: FormData) {
    this.resultsElement.innerHTML = ""; // Clear previous results.
    this.showLoadingSpinner();
    if (!data.has("q")) {
      this.stat.innerHTML = this.tmplMissingKeywords;
      this.hideLoadMoreBtn();
      this.hideLoadingSpinner();
      return;
    }
    this.setPage(data.get("q"));
    this.engine
      .search(data)
      .then((results) => {
        this.page = 1;
        this.results = results;
        if (this.results.length > params.paginate) {
          this.showLoadMoreBtn();
        } else {
          this.hideLoadMoreBtn();
        }
      })
      .then(() => {
        if (this.results.length > 0) {
          this.poplateResultsInternal();
        } else {
          this.stat.innerHTML = this.tmplNoResults;
        }
      })
      .catch((err) => {
        console.error(err);
      })
      .finally(() => {
        this.hideLoadingSpinner();
      });
  }

  setPage(query) {
    const title = (query ? `${query} - ` : "") + this.title;
    const url = `${window.location.pathname}?q=${encodeURIComponent(query)}`;
    window.history.pushState(null, title, url);
    document.title = title; // history.pushState's title was ignored.
  }

  static normalizeTaxonomy(text, render) {
    return render(text).toLowerCase().replaceAll(" ", "-");
  }

  poplateResults() {
    return new Promise((resolve) => {
      setTimeout(() => {
        resolve(this.poplateResultsInternal());
      }, 1);
    });
  }

  private poplateResultsInternal() {
    if (!this.results) {
      return;
    }
    if (this.loading) {
      return;
    }
    this.loading = true;
    this.loadMore.setAttribute("disabled", "");
    this.stat.innerHTML = Mustache.render(this.tmplStat, {
      total: this.results.length,
    });
    let i = (this.page - 1) * params.paginate;
    let count = 0;
    for (
      ;
      i < this.results.length && count < params.paginate;
      i += 1, count += 1
    ) {
      const result = this.results[i];
      const idx = (this.page - 1) * params.paginate + i;
      const titleKeywords = [];
      const contentKeywords = [];
      result.matches.forEach((match) => {
        match.indices.forEach((index) => {
          const keyword = match.value.substring(index[0], index[1] + 1);
          switch (match.key) {
            case "title":
              titleKeywords.push(keyword);
              break;
            case "content":
              contentKeywords.push(keyword);
              break;
            default:
          }
        });
      });
      let { content } = result.item;
      if (content.length > params.resultContentWordCount) {
        let contentStart = 0;
        if (contentKeywords.length > 0) {
          const pos = content.indexOf(contentKeywords[0]);
          if (
            pos + contentKeywords[0].length >
            params.resultContentWordCount - 1
          ) {
            contentStart = pos;
          }
        }
        content = `${
          (contentStart === 0 ? "" : "...") +
          content.substring(
            contentStart,
            contentStart + params.resultContentWordCount
          )
        }...`;
      }
      const id = `searchResult${idx}`;
      this.resultsElement.insertAdjacentHTML(
        "beforeend",
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
          langName: result.item.langName,
          url() {
            return Search.normalizeTaxonomy;
          },
        })
      );
      this.highlight(id, titleKeywords, contentKeywords);
    }
    this.loading = false;
    this.loadMore.removeAttribute("disabled");
    if (this.results.length <= params.paginate * this.page) {
      this.hideLoadMoreBtn();
    } else {
      this.showLoadMoreBtn();
    }
    this.page += 1;
    const event = document.createEvent("HTMLEvents");
    event.initEvent("hbs:viewer:update");
    document.dispatchEvent(event);
  }

  static formatScore(value) {
    return ((1 - value) * 5).toFixed(1);
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
