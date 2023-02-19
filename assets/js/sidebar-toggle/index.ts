import Component from "js/component";
import { default as LocalStorage } from "js/local-storage";

class SidebarToggle implements Component {
  main: HTMLElement;

  sidebar: HTMLElement;

  key = "sidebar-toggle";

  colClass = "col-xxl-";

  constructor(public button: HTMLElement) {}

  run() {
    if (!this.button) {
      return;
    }

    this.sidebar = document.querySelector(".content .sidebar");
    this.main = this.sidebar.previousElementSibling as HTMLElement;
    this.button.addEventListener("click", () => {
      this.toggle();
    });

    const val = LocalStorage.getItem(this.key);
    if (val === "hide" && this.isShown()) {
      this.hide();
    }
  }

  toggle() {
    if (this.isShown()) {
      this.hide();
    } else {
      this.show();
    }
  }

  isShown() {
    return !this.sidebar.classList.contains("d-none");
  }

  getWidth(element: HTMLElement) {
    let width = 0;
    element.classList.forEach((value) => {
      if (value.indexOf(this.colClass) === 0) {
        width = parseInt(value.replace(this.colClass, ""));
      }
    });

    return width;
  }

  fullWidth?: number;

  getFullWidth() {
    if (!this.fullWidth) {
      this.fullWidth = this.getWidth(this.sidebar) + this.getMainWidth();
    }

    return this.fullWidth;
  }

  mainWidth?: number;

  getMainWidth() {
    if (!this.mainWidth) {
      this.mainWidth = this.getWidth(this.main);
    }

    return this.mainWidth;
  }

  hide() {
    this.main.classList.replace(
      this.colClass + this.getMainWidth(),
      this.colClass + this.getFullWidth()
    );
    this.sidebar.classList.add("d-none");
    this.button.classList.add("active");
    LocalStorage.setItem(this.key, "hide");
  }

  show() {
    this.main.classList.replace(
      this.colClass + this.getFullWidth(),
      this.colClass + this.getMainWidth()
    );
    this.sidebar.classList.remove("d-none");
    this.button.classList.remove("active");
    LocalStorage.removeItem(this.key);
  }
}

export default SidebarToggle;
