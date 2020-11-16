import { Popover as BSPopover } from 'bootstrap';
import Popover from './popover';

class FontSizeSwitcher extends Popover {
  key: string;

  init() {
    const { allowList } = BSPopover.Default;
    allowList.form = [];
    allowList.label = ['for'];
    allowList.input = ['type', 'min', 'max', 'step'];
    this.options.allowList = allowList;
    super.init();
    this.key = 'hbs-font-size';
    this.initSize();
    this.initPopover();
  }

  initSize() {
    const size = this.getSize();
    if (size) {
      this.setSize(size);
    }
  }

  initPopover() {
    const instance = this;
    this.element.addEventListener('shown.bs.popover', () => {
      const input: HTMLInputElement = document.getElementById('fontSize') as HTMLInputElement;
      input.value = instance.getSize();
      input.addEventListener('change', () => {
        instance.setSize(input.value);
        instance.instance.hide();
      });
    });
  }

  getSize(): string {
    const size = localStorage.getItem(this.key);
    if (size) {
      return size;
    }

    return '';
  }

  setSize(value: string) {
    let size: string;
    switch (value) {
      case '-1':
        size = 'small';
        break;
      case '1':
        size = 'large';
        break;
      default:
        size = '';
        break;
    }
    if (size === '') {
      localStorage.removeItem(this.key);
      document.body.removeAttribute('data-font-size');
    } else {
      localStorage.setItem(this.key, value);
      document.body.setAttribute('data-font-size', size);
    }
  }
}

export default FontSizeSwitcher;
