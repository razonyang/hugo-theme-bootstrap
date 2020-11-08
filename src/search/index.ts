import { Search } from './search';

document.addEventListener('DOMContentLoaded', () => {
  const search = new Search(document.querySelector('#searchForm'));
  search.init();
});
