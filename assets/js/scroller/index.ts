import Component from "js/component";

class Scroller implements Component {
  private btn: HTMLElement;

  public x: number = 0;

  public y: number = 0;

  constructor() {
    const btn = document.createElement('a');
    btn.setAttribute('role', 'button');
    btn.setAttribute('aria-label', 'Scroll to top');
    btn.className = 'btn btn-sm btn-outline-primary btn-scroll-to-top position-fixed opacity-0 p-1';
    btn.innerHTML = '<i class="fas fa-fw fa-chevron-circle-down fa-2x" data-fa-transform="rotate-180"></i>';
    window.document.body.append(btn);
    this.btn = btn;
  }

  show() {
    this.btn.classList.add('opacity-100');
  }

  hide() {
    this.btn.classList.remove('opacity-100');
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

export default Scroller;
