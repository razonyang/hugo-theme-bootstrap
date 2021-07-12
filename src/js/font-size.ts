class FontSizeSwitcher {
  key: string = 'hbs-font-size';
  input: HTMLInputElement;

  sizes: Map<string, string> = new Map([
    ['-2', 'xs'],
    ['-1', 'sm'],
    ['0', ''],
    ['1', 'lg'],
    ['2', 'xl'],
  ]);

  init() {
    this.input = document.getElementById('fontSize') as HTMLInputElement
    if (!this.input) {
      return;
    }
    this.initSize();
    this.initListeners();
  }

  initSize() {
    const size = this.getSize();
    if (size) {
      this.setSize(size);
    }
  }

  initListeners() {
    this.input.value = this.getSize();
    const self = this
    this.input.addEventListener('change', () => {
      self.setSize(self.input.value);
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
