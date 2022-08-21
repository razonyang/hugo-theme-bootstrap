class Snackbar {
  element: HTMLElement;

  constructor() {
    const e = document.createElement('div');
    e.className =
      'snackbar opacity-0 position-fixed w-100 d-flex justify-content-center';
    document.body.appendChild(e);
    this.element = e;
  }

  show(body: string, duration = 2000) {
    this.element.innerHTML =
      '<div class="snackbar-body text-bg-secondary rounded px-3 py-2">' +
      body +
      '</div>';
    this.element.classList.add('show');
    setTimeout(() => {
      this.element.classList.remove('show');
      setTimeout(() => {
        this.element.innerHTML = '';
      }, 1000)
    }, duration);
  }
}

const snackbar = new Snackbar();
export default snackbar;
