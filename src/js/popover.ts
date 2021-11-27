import  * as BasePopover  from 'bootstrap/js/dist/popover';

class PopOver {
  static run() {
    const popoverTriggerList = [].slice.call(document.querySelectorAll('[data-bs-toggle="popover"]'));
    popoverTriggerList.map((ele) => new BasePopover(ele));
  }
}

PopOver.run();
