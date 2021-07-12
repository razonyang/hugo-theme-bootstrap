class PaletteSwitcher {
  key: string;

  init() {
    this.key = 'hbs-palette';
    this.initPalette();
  }

  initPalette() {
    const palette = this.getPalette();
    if (palette) {
      this.setPalette(palette);
    }
    const selected = this.getPalette();
    const self = this;
    const palettePicker = document.querySelector('#palettePicker');
    if (!palettePicker) {
      return;
    }
    document.querySelector('#btnPalette').addEventListener('click', function() {
      if (palettePicker.classList.contains('visually-hidden')) {
        palettePicker.classList.remove('visually-hidden');
      } else {
        palettePicker.classList.add('visually-hidden');
      }
    });
    document.querySelectorAll('.palette').forEach((element) => {
      const palette = element.getAttribute('id').replace('palette-', '');
      if (palette === selected) {
        element.classList.add('active');
      }
      element.addEventListener('click', () => {
        self.setPalette(palette);
        document.querySelector('.palette.active').classList.remove('active');
        element.classList.add('active');
        palettePicker.classList.add('visually-hidden');
      });
    });
  }

  getPalette(): string {
    const palette = localStorage.getItem(this.key);
    if (palette) {
      return palette;
    }

    const paletteMeta = document.querySelector('meta[data-name="palette"]');
    if (paletteMeta) {
      return paletteMeta.getAttribute('content');
    }

    return '';
  }

  setPalette(palette: string) {
    console.debug(`switch to palette: ${palette}`);
    document.body.classList.remove(`palette-${this.getPalette()}`);
    document.body.classList.add(`palette-${palette}`);
    localStorage.setItem(this.key, palette);
  }
}

export default PaletteSwitcher;
