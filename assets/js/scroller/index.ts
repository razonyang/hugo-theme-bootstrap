import Component from "js/component";

class Scroller implements Component {
  private btn: HTMLElement;

  public x = 0;

  public y = 0;

  constructor() {
    const btn = document.createElement("a");
    btn.setAttribute("role", "button");
    btn.setAttribute("aria-label", "Scroll to top");
    btn.className =
      "btn btn-link p-0 btn-scroll-to-top position-fixed opacity-0";
    btn.innerHTML =
      '<i class="fas fa-fw fa-rocket" data-fa-transform="rotate-315"></i>';
    window.document.body.append(btn);
    this.btn = btn;
  }

  show() {
    this.btn.classList.add("opacity-100");
  }

  hide() {
    this.btn.classList.remove("opacity-100");
  }

  run() {
    let y = 0;
    window.addEventListener("scroll", () => {
      const top = document.documentElement.scrollTop;
      if (document.body.scrollTop > 20 || top > 20) {
        this.show();
      } else {
        this.hide();
      }
      if (top > y) {
        this.btn.classList.remove("scrolling");
      }
      y = top;
    });
    this.btn.addEventListener("click", () => {
      this.scroll();
    });
  }

  scroll() {
    this.btn.classList.add("scrolling");
    window.scrollTo({
      top: this.x,
      left: this.y,
      behavior: "smooth",
    });
  }
}

export default Scroller;
