class ModeSwitcher {
  public key: string = 'hbs-mode';
  public modeReg: RegExp;

  constructor(public element: HTMLInputElement) {
  }

  init() {
    this.modeReg = new RegExp('\\bmode-.+?\\b', 'g');
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
    document.body.className =  document.body.className.replace(this.modeReg, '');
    document.body.classList.add('mode-' + value);
    localStorage.setItem(this.key, value);
    let checked: boolean = false;
    if (value === 'dark') {
      checked = true;
    }
    this.element.checked = checked;
  }
}

export default ModeSwitcher;
