import { default as LocalStorage } from "js/local-storage";

(() => {
  if (LocalStorage.getItem('sidebar-toggle') !== null && document.querySelector('main')?.getAttribute('data-kind') === 'page') {
    document.querySelector('main')?.classList.add('sidebar-none')
  }
})()
