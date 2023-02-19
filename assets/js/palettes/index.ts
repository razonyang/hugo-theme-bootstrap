import Component from "js/component";
import { default as LocalStorage } from "js/local-storage";

class PaletteSelector implements Component {
  key = "palette";

  run() {
    const palette = this.getPalette();
    if (palette) {
      this.setPalette(palette);
    }
    window.addEventListener("load", () => {
      this.initPalette();
    });
  }

  initPalette() {
    const selected = this.getPalette();
    document.querySelectorAll(".palette").forEach((element) => {
      const paletteId = element.getAttribute("id").replace("palette-", "");
      if (paletteId === selected) {
        element.classList.add("active");
      }
      element.addEventListener("click", () => {
        this.setPalette(paletteId);
        document.querySelector(".palette.active").classList.remove("active");
        element.classList.add("active");
      });
    });
  }

  getPalette(): string {
    const palette = LocalStorage.getItem(this.key);
    if (palette) {
      return palette;
    }

    const paletteMeta = document.documentElement.getAttribute("data-palette");
    if (paletteMeta) {
      return paletteMeta;
    }

    return "";
  }

  setPalette(palette: string) {
    console.debug(`switch to palette: ${palette}`);
    document.documentElement.setAttribute("data-palette", palette);
    LocalStorage.setItem(this.key, palette);
  }
}

export default PaletteSelector;
