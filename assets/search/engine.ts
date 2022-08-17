import Fuse from 'fuse.js';
import Form from './form';

class Engine {
  private fuse: Fuse;

  constructor(form: Form, callback: (data: FormData) => void) {
    const options = Object.assign(window.fuseOptions, {
      useExtendedSearch: true,
      keys: [
        'title',
        'content',
        'lang',
        'authors.title',
        'categories.title',
        'series.title',
        'tags.title',
      ],
    });
    fetch(window.searchIndex).then((response)=>{
      return response.json();
    }).then((response) => {
      const pages = response.pages;
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

  search(data: FormData) {
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
          params.$and.push({ 'authors.title': author });
        }
        const category = data.get('category');
        if (category) {
          params.$and.push({ 'categories.title': category });
        }
        const series = data.get('series');
        if (series) {
          params.$and.push({ 'series.title': series });
        }
        const tag = data.get('tag');
        if (tag) {
          params.$and.push({ 'tags.title': tag });
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
