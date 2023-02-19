import Component from "js/component";
import Snackbar from "js/snackbar";

class ActionsPanel implements Component {
  private btn: HTMLElement;

  createButton() {
    const btn = document.createElement("a");
    btn.setAttribute("role", "button");
    btn.setAttribute("aria-label", "Actions panel toggle");
    btn.setAttribute("data-bs-toggle", "offcanvas");
    btn.setAttribute("data-bs-target", "#offcanvasActionsPanel");
    btn.className = "btn btn-link btn-actions-panel position-fixed p-0";
    btn.innerHTML = '<i class="fas fa-fw fa-th-large"></i>';
    window.document.body.append(btn);
    this.btn = btn;
  }

  run() {
    if (!document.querySelector("#offcanvasActionsPanel")) {
      return;
    }

    this.createButton();

    document
      .querySelector(".action-reload-page")
      .addEventListener("click", function () {
        window.location.reload();
      });
    document
      .querySelector(".action-copy-url")
      .addEventListener("click", function () {
        navigator.clipboard.writeText(window.location.href);
        Snackbar.show("Copied");
      });
  }
}

export default ActionsPanel;
