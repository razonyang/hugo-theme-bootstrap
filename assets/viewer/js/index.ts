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
        document.querySelectorAll('img').forEach(function (img) {
            if (img.parentElement.tagName !== 'A' && self.validate(img)) {
              img.addEventListener('click', function () {
                self.gallery.show();
              });
            }
        });
    }

    validate(img) {
      return !img.hasAttribute('data-viewer-invisible');
    }
}

document.addEventListener('DOMContentLoaded', () => {
    (new Gallery()).run();
});
