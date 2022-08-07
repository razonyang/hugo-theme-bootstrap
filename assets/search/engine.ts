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
    const xhr = new XMLHttpRequest();
    xhr.onreadystatechange = () => {
      if (xhr.readyState === 4) {
        if (xhr.status !== 200) {
          console.error({ error: xhr.statusText });
          return;
        }
        const pages = xhr.response.pages;
        const taxonomies = ['categories', 'authors', 'series', 'tags'];
        for (const i in taxonomies) {
          const datalist = document.querySelector(
            '#' + taxonomies[i] + '-list'
          );
          for (const j in xhr.response[taxonomies[i]]) {
            const option = document.createElement('option');
            option.value = xhr.response[taxonomies[i]][j];
            datalist.appendChild(option);
          }
        }
        this.fuse = new Fuse(pages, options);
        callback(form.data());
      }
    };
    xhr.responseType = 'json';
    xhr.open('GET', window.searchIndex, true);
    xhr.send(null);
  }

  search(data: FormData) {
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
    return this.fuse.search(params);
  }
}

export default Engine;
