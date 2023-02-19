import Component from "js/component";

export default class TOC implements Component {
  private container: HTMLElement;
  private target: HTMLElement;

  constructor(container: string, target: string) {
    this.container = document.querySelector(container);
    this.target = document.querySelector(target);
  }

  run() {
    if (!this.target || !this.container) {
      return;
    }

    const child = this.target.cloneNode(true);
    child.removeAttribute("id");
    this.container.appendChild(child);
  }
}
