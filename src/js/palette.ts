import Popover from './popover';

class PaletteSwitcher extends Popover {
  key: string;

  init() {
    super.init();
    this.key = 'hbs-palette';
    this.initPalette();
    this.initPopover();
  }

  initPalette() {
    const palette = this.getPalette();
    if (palette) {
      this.setPalette(palette);
    }
  }

  initPopover() {
    const instance = this;
    this.element.addEventListener('shown.bs.popover', () => {
      document.querySelectorAll('.palette').forEach((element) => {
        const palette = element.getAttribute('id').replace('palette-', '');
        if (palette === document.body.getAttribute('data-palette')) {
          element.classList.add('active');
        }
        element.addEventListener('click', () => {
          instance.setPalette(palette);
          instance.instance.hide();
        });
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
    localStorage.setItem(this.key, palette);
    document.body.setAttribute('data-palette', palette);
  }
}

export default PaletteSwitcher;
