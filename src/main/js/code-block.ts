import GlobalSnackbar from "./snackbar";

class CodeBlock {
  wrapper: HTMLElement;

  element: HTMLElement;

  pre: HTMLElement;

  code: HTMLElement;

  panel: HTMLElement;

  params: any;

  maxHeight: number;

  constructor(element: HTMLElement) {
    this.element = element;
    this.pre = element.querySelector('pre');
    this.code = this.pre.querySelector('code');
    this.params = window.params.codeBlock;
  }

  run() {
    this.wrap();
  }

  wrap() {
    const parent = this.element.parentNode;
    this.wrapper = document.createElement('div');
    this.wrapper.className = 'highlight-wrapper';
    parent.replaceChild(this.wrapper, this.element);
    this.wrapper.appendChild(this.element);

    this.appendLang();
    this.appendPanel();
  }

  appendLang() {
    const lang = this.code.getAttribute('data-lang');
    if (lang) {
      const element = document.createElement('div');
      element.className = 'lang';
      element.innerHTML = lang;
      this.wrapper.appendChild(element);
    }
  }

  appendPanel() {
    this.panel = document.createElement('div');
    this.panel.className = 'chroma panel';
    this.calculateMaxHeight();
    this.appendCopyButton();
    this.appendLineNumberButton();
    this.appendLineWrapButton();
    this.appendExpandButton();
    this.wrapper.appendChild(this.panel);
  }

  calculateMaxHeight() {
    const lineNumbers = this.lineNumbers();
    if (lineNumbers > this.params.maxLines) {
      const maxLine = this.code.querySelectorAll('.ln')[this.params.maxLines] as HTMLElement;
      this.maxHeight = maxLine.offsetTop;
    }
  }

  appendCopyButton() {
    const btn = document.createElement('a');
    btn.setAttribute('role', 'button');
    btn.setAttribute('aria-label', 'Copy Code');
    btn.className = 'action';
    btn.innerHTML = '<i class="fas fa-copy"></i>';
    const self = this;
    btn.addEventListener('click', () => {
      const cloneCode = self.code.cloneNode(true) as HTMLElement;
      cloneCode.querySelectorAll('.ln').forEach((ln) => {
        ln.remove();
      });
      navigator.clipboard.writeText(cloneCode.innerText);
      GlobalSnackbar.show('Copied');
      btn.classList.add('active');
    });
    this.panel.appendChild(btn);
  }

  appendLineNumberButton() {
    if (this.hasLineNumbers()) {
      const btn = document.createElement('a');
      btn.setAttribute('role', 'button');
      btn.setAttribute('aria-label', 'Line number toggler');
      btn.className = 'action active';
      btn.innerHTML = '<i class="fas fa-list"></i>';
      const self = this;
      btn.addEventListener('click', () => {
        const { classList } = self.code;
        const className = 'no-ln';
        if (classList.contains(className)) {
          classList.remove(className);
          btn.classList.add('active');
        } else {
          classList.add(className);
          btn.classList.remove('active');
        }
      });
      if (this.params.lineNos === false) {
        btn.click();
      }
      this.panel.appendChild(btn);
    }
  }

  hasLineNumbers() :boolean {
    return this.lineNumbers() > 0;
  }

  lineNumbers(): number {
    return this.code.querySelectorAll('.ln').length;
  }

  appendLineWrapButton() {
    const self = this;
    const btn = document.createElement('a');
    btn.setAttribute('role', 'button');
    btn.setAttribute('aria-label', 'Line wrap toggler');
    btn.className = 'action';
    btn.innerHTML = '<i class="fas fa-code"></i>';
    btn.addEventListener('click', () => {
      const { classList } = self.code;
      const className = 'text-pre-wrap';
      if (classList.contains(className)) {
        classList.remove(className);
        btn.classList.remove('active');
      } else {
        classList.add(className);
        btn.classList.add('active');
      }
    });
    this.panel.appendChild(btn);
  }

  appendExpandButton() {
    if (this.maxHeight) {
      this.pre.style.maxHeight = `${this.maxHeight}px`;

      const btn = document.createElement('a');
      btn.setAttribute('role', 'button');
      btn.setAttribute('aria-label', 'Code block expand toggler');
      btn.className = 'action';
      btn.innerHTML = '<i class="fas fa-arrows-alt-v"></i>';
      btn.addEventListener('click', () => {
        const { style } = this.pre;
        if (style.maxHeight) {
          style.maxHeight = null;
          btn.classList.add('active');
        } else {
          style.maxHeight = `${this.maxHeight}px`;
          btn.classList.remove('active');
        }
      });
      this.panel.appendChild(btn);
    }
  }
}

export default CodeBlock;
