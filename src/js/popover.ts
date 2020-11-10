import { Popover as BSPopover } from 'bootstrap';

class Popover {
  protected instance: BSPopover;

  public options: any = {};

  constructor(public element: HTMLElement, options?: any) {
    this.options = { ...this.options, ...options };
  }

  init() {
    const target = this.element.getAttribute('data-target');
    if (target) {
      this.options.content = document.querySelector(target).innerHTML;
    }
    this.instance = new BSPopover(this.element, this.options);
  }
}

export default Popover;
