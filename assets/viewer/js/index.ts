import Viewer from 'viewerjs';
import options from './options';

class Gallery {
    gallery: Viewer;

    constructor() {
        const self = this;
        const defaultOptions: Viewer.Options = {
            filter(img: HTMLImageElement) {
                return self.validate(img);
            },
            url(img: HTMLImageElement) {
              return img.hasAttribute('data-src') ? img.getAttribute('data-src') : img.src;
            },
        }

        this.gallery = new Viewer(document.querySelector('main'), Object.assign(defaultOptions, options));
    }

    run() {
        const self = this;
        document.addEventListener('click',function(e: Event) {
          if(e.target && e.target instanceof HTMLElement && e.target.tagName === 'IMG') {
            if (self.validate(e.target)) {
              self.gallery.show();
            }
          }
        });
        document.addEventListener('hbs:viewer:update', function(e) {
          self.gallery.update();
        });
    }

    validate(img) {
      if (img.parentElement.tagName === 'A' || img.hasAttribute('data-viewer-invisible')) {
        return false;
      }
      if (img.parentElement.tagName === 'PICTURE') {
        return this.validate(img.parentElement);
      }
      return true;
    }
}

document.addEventListener('DOMContentLoaded', () => {
    (new Gallery()).run();
});
