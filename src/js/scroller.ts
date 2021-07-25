class Scroller {
  public x: number = 0;

  public y: number = 0;

  constructor(public element: HTMLElement) {
  }

  show() {
    this.element.classList.add('active');
  }

  hide() {
    this.element.classList.remove('active');
  }

  run() {
    if (!this.element) {
      return;
    }
    const instance = this;
    window.addEventListener('scroll', () => {
      if (document.body.scrollTop > 20 || document.documentElement.scrollTop > 20) {
        instance.show();
      } else {
        instance.hide();
      }
    });
    this.element.addEventListener('click', () => {
      instance.scroll();
    });
  }

  scroll() {
    window.scrollTo({
      top: this.x,
      left: this.y,
      behavior: 'smooth',
    });
  }
}

export default Scroller;
