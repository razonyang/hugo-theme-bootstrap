class ModeSwitcher {
  public key: string = 'hbs-mode';

  utterances: any;

  constructor(public element: HTMLInputElement) {
    this.utterances = window.params.utterances;
  }

  run() {
    if (!this.element) {
      return;
    }

    this.initListeners();
    this.initMode();
  }

  initListeners() {
    const instance = this;

    this.element.addEventListener('change', () => {
      instance.setMode(this.element.checked ? 'dark' : 'light');
    });

    window.matchMedia('(prefers-color-scheme: dark)').addListener((e) => {
      instance.setMode(e.matches ? 'dark' : 'light');
    });
  }

  initMode() {
    const mode = this.getMode();
    if (mode) {
      this.setMode(mode);
    }
  }

  getMode(): string {
    // load scheme from localStorage.
    let mode = localStorage.getItem(this.key);
    if (!mode) {
      // load scheme from query media
      if (window.getComputedStyle(document.body).getPropertyValue('--mode').toString().trim() === 'dark') {
        mode = 'dark';
      }
    }
    return mode || 'light';
  }

  setMode(value: string) {
    console.debug(`Switch to ${value} mode`);
    document.body.classList.remove(`mode-${this.getMode()}`);
    document.body.classList.add(`mode-${value}`);
    let checked: boolean = false;
    if (value === 'dark') {
      checked = true;
    }
    this.element.checked = checked;
    localStorage.setItem(this.key, value);
    this.rerenderComments(value);
  }

  rerenderComments(mode: string) {
    if (!this.utterances.repo) {
      return;
    }
    if (this.utterances.theme !== '') {
      return;
    }
    const comments = document.querySelector('.post-comments');
    if (!comments) {
      return;
    }

    const js = document.createElement('script');
    js.setAttribute('src', 'https://utteranc.es/client.js');
    js.setAttribute('repo', this.utterances.repo);
    js.setAttribute('issue-term', this.utterances.issueTerm);
    js.setAttribute('theme', mode === 'dark' ? 'github-dark' : 'github-light');
    const clone = comments.cloneNode(false);
    clone.appendChild(js);
    comments.parentNode.replaceChild(clone, comments);
  }
}

export default ModeSwitcher;
