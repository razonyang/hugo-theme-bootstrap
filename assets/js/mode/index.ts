import { default as params } from "@params";
import Component from "js/component";
import { default as LocalStorage } from "js/local-storage";

const MODE_AUTO = "auto";
const MODE_DARK = "dark";
const MODE_LIGHT = "light";

const modes = [MODE_AUTO, MODE_DARK, MODE_LIGHT];

class ModeToggle implements Component {
  // Cache key.
  public key = "mode";

  // Current color mode.
  private mode;

  private items;

  constructor() {
    // Load from local storage.
    let mode = LocalStorage.getItem(this.key);
    if (!mode) {
      mode = params.color;
    }
    this.mode = modes.includes(mode) ? mode : MODE_AUTO;
  }

  run() {
    this.setMode(this.mode);
    window.addEventListener("load", () => {
      this.initListeners();
      this.active(this.mode);
    });
  }

  initListeners() {
    this.items = document.querySelectorAll(".mode-item");
    this.items.forEach((ele) => {
      ele.addEventListener("click", () => {
        const mode = ele.getAttribute("data-color-mode");
        this.setMode(mode);
        this.active(mode);
      });
    });

    window.matchMedia("(prefers-color-scheme: dark)").addListener((e) => {
      if (this.isAuto()) {
        this.setMode(e.matches ? "dark" : "light");
      }
    });
  }

  isAuto(): boolean {
    return this.mode === MODE_AUTO;
  }

  // Active the relative HTML elements.
  active(mode: string) {
    this.mode = mode;
    LocalStorage.setItem(this.key, mode);

    this.items.forEach((ele) => {
      const classList = ele.querySelector(".dropdown-item").classList;
      if (ele.getAttribute("data-color-mode") === mode) {
        classList.add("active");
      } else {
        classList.remove("active");
      }
    });

    const icon = document
      .querySelector('.mode-item[data-color-mode="' + mode + '"] .mode-icon')
      ?.cloneNode(true) as HTMLElement;
    if (!icon) {
      return;
    }

    icon.setAttribute("id", "modeIcon");
    document.querySelector("#modeIcon")?.replaceWith(icon);
  }

  setMode(value: string) {
    if (value === "auto") {
      value = ModeToggle.getPreferredMode();
    }
    console.debug(`Switch to ${value} mode`);
    document.documentElement.setAttribute("data-bs-theme", value);

    // Emits a custom event.
    const event = new CustomEvent("hbs:mode", { detail: { mode: value } });
    document.dispatchEvent(event);
  }

  static getPreferredMode(): string {
    if (window.matchMedia("(prefers-color-scheme: dark)").matches) {
      return "dark";
    }
    return "light";
  }
}

export default ModeToggle;
