import * as params from "@params";
import { default as LocalStorage } from "js/local-storage";
import ModeToggle from "js/mode";

class Utterances {
  run() {
    const theme = params.utterances.theme;
    if (!theme) {
      document.addEventListener("hbs:mode", (e: CustomEvent) => {
        this.rerender(this.getTheme(e.detail.mode));
      });
      setTimeout(() => {
        this.rerender(this.getTheme(LocalStorage.getItem("mode")));
      }, 2000);
    }
  }

  getTheme(mode) {
    if (mode === "auto") {
      mode = ModeToggle.getPreferredMode();
    }
    return mode === "dark" ? "github-dark" : "github-light";
  }

  rerender(theme) {
    const msg = {
      type: "set-theme",
      theme: theme,
    };
    const iframe =
      document.querySelector<HTMLIFrameElement>(".utterances-frame");
    iframe?.contentWindow?.postMessage(msg, "https://utteranc.es");
  }
}

document.addEventListener("DOMContentLoaded", () => {
  new Utterances().run();
});
