class TopAppBar {
  btnSearch: HTMLButtonElement;
  
  searchInput: HTMLInputElement;

  btnBack: HTMLButtonElement;

  constructor(public appBar: HTMLElement) {
    const self = this;

    this.btnSearch = appBar.querySelector('.navbar-action-search');
    this.btnSearch.addEventListener('click', function () {
      self.showSearchBar();
    })

    this.searchInput = appBar.querySelector('.search-bar input');

    this.btnBack = appBar.querySelector('.btn-back');
    this.btnBack.addEventListener('click', function () {
      self.back();
    })

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
  new TopAppBar(document.querySelector('.top-app-bar'));
})
