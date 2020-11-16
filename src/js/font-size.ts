import { Popover as BSPopover } from 'bootstrap';
import Popover from './popover';

class FontSizeSwitcher extends Popover {
  key: string;

  reg: RegExp;

  init() {
    this.reg = new RegExp('\\bfont-size-.+?\\b', 'g');
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
        size = 'sm';
        break;
      case '1':
        size = 'lg';
        break;
      default:
        size = '';
        break;
    }
    document.body.className = document.body.className.replace(this.reg, '');
    if (size === '') {
      localStorage.removeItem(this.key);
    } else {
      localStorage.setItem(this.key, value);
      document.body.classList.add('font-size-' + size);
    }
  }
}

export default FontSizeSwitcher;
