import { Popover as BasePopover } from 'bootstrap';

class PopOver {
  static run() {
    const popoverTriggerList = [].slice.call(document.querySelectorAll('[data-bs-toggle="popover"]'));
    popoverTriggerList.map((ele) => new BasePopover(ele));
  }
}

export default PopOver;
