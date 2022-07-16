import Component from 'js/component';
import { default as LocalStorage } from 'js/local-storage';

class PaletteSelector implements Component {
  key: string;

  run() {
    this.key = 'palette';
    this.initPalette();
  }

  initPalette() {
    const palette = this.getPalette();
    if (palette) {
      this.setPalette(palette);
    }
    const selected = this.getPalette();
    document.querySelectorAll('.palette').forEach((element) => {
      const paletteId = element.getAttribute('id').replace('palette-', '');
      if (paletteId === selected) {
        element.classList.add('active');
      }
      element.addEventListener('click', () => {
        this.setPalette(paletteId);
        document.querySelector('.palette.active').classList.remove('active');
        element.classList.add('active');
      });
    });
  }

  getPalette(): string {
    const palette = LocalStorage.getItem(this.key);
    if (palette) {
      return palette;
    }

    const paletteMeta =
      document.body.parentElement.getAttribute('data-palette');
    if (paletteMeta) {
      return paletteMeta;
    }

    return '';
  }

  setPalette(palette: string) {
    console.debug(`switch to palette: ${palette}`);
    document.body.parentElement.setAttribute('data-palette', palette);
    LocalStorage.setItem(this.key, palette);
  }
}

export default PaletteSelector;
