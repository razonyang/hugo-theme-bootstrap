class TopAppBar {
  btnSearch: HTMLButtonElement;

  searchInput: HTMLInputElement;

  btnBack: HTMLButtonElement;

  constructor(public appBar: HTMLElement) {
    this.btnSearch = appBar.querySelector('.navbar-action-search');

    this.searchInput = appBar.querySelector('.search-bar input');

    this.btnBack = appBar.querySelector('.btn-back');
  }

  run() {
    const self = this;

    this.btnSearch.addEventListener('click', () => {
      self.showSearchBar();
    });

    this.btnBack.addEventListener('click', () => {
      self.back();
    });
  }

  showSearchBar() {
    this.appBar.classList.add('top-app-bar-search');
    this.searchInput.focus();
  }

  back() {
    this.appBar.classList.remove('top-app-bar-search');
  }
}

document.addEventListener('DOMContentLoaded', () => {
  new TopAppBar(document.querySelector('.top-app-bar')).run();
});
