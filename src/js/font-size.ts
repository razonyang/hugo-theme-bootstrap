import { Popover as BSPopover } from 'bootstrap';
import Popover from './popover';

class FontSizeSwitcher extends Popover {
  key: string;

  sizes: Map<string, string> = new Map([
    ['-2', 'xs'],
    ['-1', 'sm'],
    ['0', ''],
    ['1', 'lg'],
    ['2', 'xl'],
  ]);

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
    const size: string = this.sizes.get(value);
    document.body.classList.remove(`font-size-${this.sizes.get(this.getSize())}`);
    if (size === '') {
      localStorage.removeItem(this.key);
    } else {
      localStorage.setItem(this.key, value);
      document.body.classList.add(`font-size-${size}`);
    }
  }
}

export default FontSizeSwitcher;
