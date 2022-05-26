import Component from "js/component";

class FontSizeSelector implements Component {
  key: string = 'hbs-font-size';
  items;

  constructor() {
    this.items = document.querySelectorAll('.font-size-item');
  }

  run() {
    if (!this.items) {
      return;
    }
    this.initSize();
    this.initListeners();
  }

  initSize() {
    this.setSize(this.getSize());
  }

  initListeners() {
    const self = this;
    this.items.forEach((ele) => {
      ele.addEventListener('click', () => {
        const size = ele.getAttribute('data-size');
        self.setSize(size);
      });
    });
  }

  getSize(): string {
    const size = localStorage.getItem(this.key);
    if (size) {
      return size;
    }

    return 'md';
  }

  setSize(value: string) {
    document.body.classList.remove('fs-' + this.getSize());
    document.body.classList.add(`fs-${value}`);
    localStorage.setItem(this.key, value);
    this.items.forEach((ele)=>{
      if (ele.getAttribute('data-size') === value) {
        ele.classList.add('active');
      } else {
        ele.classList.remove('active');
      }
    });
  }
}

export default FontSizeSelector;
