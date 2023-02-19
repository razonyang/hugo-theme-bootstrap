import Component from "js/component";

export default class IFrame implements Component {
  run() {
    this.load();
    this.fullscreen();
  }

  load() {
    document.querySelectorAll(".iframe-load").forEach((btn) => {
      btn.addEventListener("click", () => {
        const parent = btn.parentElement;
        const iframe = parent.nextElementSibling;
        const btnFullscreen = parent.querySelector(".iframe-fullscreen");
        const loadInfo = parent.querySelector(".iframe-load-info");
        iframe.setAttribute("src", iframe.getAttribute("data-src"));
        iframe.removeAttribute("data-src");
        iframe.addEventListener("load", () => {
          // Show the fullscreen button if present.
          btnFullscreen && btnFullscreen.classList.remove("d-none");
        });
        // Hide the load button.
        btn.classList.add("d-none");
        // Hide the load information.
        loadInfo.classList.add("d-none");
      });
    });
  }

  fullscreen() {
    document.querySelectorAll(".iframe-fullscreen").forEach((btn) => {
      btn.addEventListener("click", () => {
        const iframe = btn.closest(".iframe-wrapper").querySelector("iframe");
        iframe.requestFullscreen();
      });
    });
  }
}
