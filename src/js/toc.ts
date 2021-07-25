import { Offcanvas } from 'bootstrap';

class TOC {
  instance: Offcanvas;

  constructor(public element: HTMLElement) {
  }

  run() {
    if (!this.element) {
      return;
    }

    this.instance = new Offcanvas(this.element);
    const self = this;
    document.querySelectorAll('#TableOfContents a').forEach((ele) => {
      ele.addEventListener('click', () => {
        self.hide();
      });
    });
  }

  hide() {
    this.instance.hide();
  }
}

export default TOC;
