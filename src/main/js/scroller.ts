class Scroller {
  private btn: HTMLElement;

  public x: number = 0;

  public y: number = 0;

  constructor() {
    const btn = document.createElement('a');
    btn.setAttribute('role', 'button');
    btn.setAttribute('aria-label', 'Scroll to top');
    btn.className = 'btn-scroll-to-top';
    btn.innerHTML = '<i class="fas fa-chevron-circle-up fa-2x"></i>';
    window.document.body.append(btn);
    this.btn = btn;
  }

  show() {
    this.btn.classList.add('active');
  }

  hide() {
    this.btn.classList.remove('active');
  }

  run() {
    const instance = this;
    window.addEventListener('scroll', () => {
      if (document.body.scrollTop > 20 || document.documentElement.scrollTop > 20) {
        instance.show();
      } else {
        instance.hide();
      }
    });
    this.btn.addEventListener('click', () => {
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

(new Scroller()).run();
