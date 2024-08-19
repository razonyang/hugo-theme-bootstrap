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

    this.sidebar = document.querySelector(".content .sidebar") as HTMLElement;
    if (!this.sidebar) {
      return;
    }
    this.main = this.sidebar.closest('main') as HTMLElement;
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
    return !this.main.classList.contains("sidebar-none");
  }

  hide() {
    this.main.classList.add('sidebar-none')
    LocalStorage.setItem(this.key, "hide");
  }

  show() {
    this.main.classList.remove('sidebar-none')
    LocalStorage.removeItem(this.key);
  }
}

export default SidebarToggle;
