class ModeSwitcher {
  public key: string = 'hbs-mode';

  constructor(public element: HTMLInputElement) {
  }

  init() {
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
      if (window.getComputedStyle(document.body).getPropertyValue('--prefers-color-scheme').toString().trim() === 'dark') {
        mode = 'dark';
      }
    }
    return mode;
  }

  setMode(value: string) {
    console.debug(`Switch to ${value} mode`);
    localStorage.setItem(this.key, value);
    document.body.setAttribute('data-mode', value);
    let checked: boolean = false;
    if (value === 'dark') {
      checked = true;
    }
    this.element.checked = checked;
  }
}

export default ModeSwitcher;
