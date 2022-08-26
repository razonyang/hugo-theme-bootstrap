import Fuse from 'fuse.js';
import Form from './form';

class Engine {
  private fuse: Fuse;
  private pages;

  constructor(form: Form, callback: (data: FormData) => void) {
    const options = Object.assign(window.fuseOptions, {
      useExtendedSearch: true,
      keys: [
        'title',
        'content',
        'lang',
        'authors_titles',
        'categories_titles',
        'series_titles',
        'tags_titles',
      ],
    });
    fetch(window.searchIndex).then((response)=>{
      return response.json();
    }).then((response) => {
      const pages = response.pages;
      this.pages = pages;
      const taxonomies = ['categories', 'authors', 'series', 'tags'];
      for (const i in taxonomies) {
        const datalist = document.querySelector(
          '#' + taxonomies[i] + '-list'
        );
        const terms = response[i]
        for (const j in terms) {
          const option = document.createElement('option');
          option.value = terms[j];
          datalist.appendChild(option);
        }
      }
      this.fuse = new Fuse(pages, options);
      callback(form.data());
    }).catch((err) => {
      console.error('unable to load search index',err)
    }).finally(() => {

    })
  }

  sortByDate(a, b, asc = true): number {
    if (!(a.idx in this.pages)) {
      return 1;
    }
    if (!(b.idx in this.pages)) {
      return -1;
    }
    return this.pages[a.idx].timestamp < this.pages[b.idx].timestamp ? (asc ? -1 : 1) : (asc ? 1 : -1)
  }

  sortByScore(a, b): number {
    return a.score === b.score ? a.idx < b.idx ? -1 : 1 : a.score < b.score ? -1 : 1
  }

  search(data: FormData) {
    switch(data.get('sort')) {
      case 'date asc':
        this.fuse.options.sortFn = (a, b) => this.sortByDate(a, b)
        break;
      case 'date desc':
        this.fuse.options.sortFn = (a, b): number => {
          return this.sortByDate(a, b, false)
        }
        break;
      default:
        this.fuse.options.sortFn = this.sortByScore
        break;
    }
    return new Promise((resolve) => {
      // delay search for displaying the loading spinner.
      setTimeout(() => {
        const params = {
          $and: [
            {
              $or: [{ title: data.get('q') }, { content: data.get('q') }],
            },
          ],
        };
        const author = data.get('author');
        if (author) {
          params.$and.push({ 'authors_titles': author });
        }
        const category = data.get('category');
        if (category) {
          params.$and.push({ 'categories_titles': category });
        }
        const series = data.get('series');
        if (series) {
          params.$and.push({ 'series_titles': series });
        }
        const tag = data.get('tag');
        if (tag) {
          params.$and.push({ 'tags_titles': tag });
        }
        const lang = data.get('lang');
        if (lang) {
          params.$and.push({ lang: '=' + lang });
        }
        resolve(this.fuse.search(params))
      }, 1)
    })
  }
}

export default Engine;
