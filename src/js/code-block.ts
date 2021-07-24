class CodeBlock {
    wrapper: HTMLElement;
    element: HTMLElement;
    pre: HTMLElement;
    code: HTMLElement;
    panel: HTMLElement;

    maxLineNumbers: number = 7;

    constructor(element: HTMLElement) {
        this.element = element;
        this.pre = element.querySelector('pre');
        this.code = this.pre.querySelector('code');
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
        this.appendCopyButton();
        this.appendLineNumberButton();
        this.appendLineWrapButton();
        this.appendExpandButton();
        this.wrapper.appendChild(this.panel);
    }

    appendCopyButton() {
        const btn = document.createElement('span');
        btn.className = 'action';
        btn.innerHTML = '<i class="fas fa-copy"></i>';
        const self = this;
        btn.addEventListener('click', function() {
            var cloneCode = self.code.cloneNode(true) as HTMLElement;
            cloneCode.querySelectorAll('.ln').forEach(function(ln) {
                ln.remove();
            });
            navigator.clipboard.writeText(cloneCode.innerText);
            btn.classList.add('active');
        });
        this.panel.appendChild(btn);
    }

    appendLineNumberButton() {
        if (this.hasLineNumbers()) {
            const btn = document.createElement('span');
            btn.className = 'action';
            btn.innerHTML = '<i class="fas fa-bars"></i>';
            const self = this;
            btn.addEventListener('click', function() {
                const classList = self.code.classList;
                const className = 'no-ln';
                if(classList.contains(className)) {
                    classList.remove(className);
                    btn.classList.remove('active');
                } else {
                    classList.add(className);
                    btn.classList.add('active');
                }
            });
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
        const btn = document.createElement('span');
        btn.className = 'action';
        btn.innerHTML = '<i class="fas fa-code"></i>';
        btn.addEventListener('click', function() {
            const classList = self.code.classList;
            const className = 'white-space-pre-wrap';
            if(classList.contains(className)) {
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
        const self = this;
        const lineNumbers = this.lineNumbers();
        if (lineNumbers > this.maxLineNumbers) {
            const maxLine = this.code.querySelectorAll('.ln')[this.maxLineNumbers] as HTMLElement;
            const maxHeight = maxLine.offsetTop;
            this.pre.style.maxHeight = `${maxHeight}px`;

            const btn = document.createElement('span');
            btn.className = 'action';
            btn.innerHTML = '<i class="fas fa-arrows-alt-v"></i>';
            btn.addEventListener('click', function() {
                self.toggleExpand(maxHeight);
            });
            this.panel.appendChild(btn);
        }
    }

    toggleExpand(maxHeight) {
        const style = this.pre.style;
        if (style.maxHeight) {
            style.maxHeight = null;
        } else {
            style.maxHeight = maxHeight + 'px';
        }
    }
}

export default CodeBlock;
