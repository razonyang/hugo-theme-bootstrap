import Component from 'js/component';
import { default as params } from '@params';
import { default as LocalStorage } from 'js/local-storage';
import { getPreferMode } from './functions';

class ModeToggle implements Component {
  public key = 'mode';
  private mode = 'auto';
  private items;

  run() {
    this.initListeners();
    this.initMode();
  }

  initListeners() {
    this.items = document.querySelectorAll('.mode-item');
    this.items.forEach((ele) => {
      ele.addEventListener('click', () => {
        const mode = ele.getAttribute('data-color-mode');
        this.active(mode);
      });
    });

    window.matchMedia('(prefers-color-scheme: dark)').addListener((e) => {
      if (this.mode === 'auto') {
        this.setMode(e.matches ? 'dark' : 'light');
      }
    });
  }

  initMode() {
    // load scheme from localStorage.
    const mode = LocalStorage.getItem(this.key);
    if (mode) {
      this.active(mode);
    } else if (params.color) {
      this.active(params.color);
    } else {
      this.active('auto');
    }
  }

  isAuto(): boolean {
    return this.mode === 'auto';
  }

  active(mode: string) {
    this.mode = mode;
    this.items.forEach((ele) => {
      const classList = ele.querySelector('.dropdown-item').classList;
      if (ele.getAttribute('data-color-mode') === mode) {
        classList.add('active');
      } else {
        classList.remove('active');
      }
    });
    LocalStorage.setItem(this.key, mode);

    const icon = document
      .querySelector('.mode-item[data-color-mode="' + mode + '"] .mode-icon')
      .cloneNode(true) as HTMLElement;
    icon.setAttribute('id', 'modeIcon');
    document.querySelector('#modeIcon').replaceWith(icon);
    this.setMode(mode);
  }

  setMode(value: string) {
    if (value === 'auto') {
      value = getPreferMode();
    }
    console.debug(`Switch to ${value} mode`);
    document.body.parentElement.setAttribute('data-theme', value); // TODO: remove in v1
    document.body.parentElement.setAttribute('data-bs-theme', value);
    const event = new CustomEvent('hbs:mode', { detail: { mode: value } });
    document.dispatchEvent(event);
  }
}

export default ModeToggle;
