import Viewer from 'viewerjs';
import options from './options';

class Gallery {
    gallery: Viewer;
    
    excludeClassNames = [
      'profile-avatar',
    ];

    constructor() {
        const self = this;
        const defaultOptions: Viewer.Options = {
            filter(img: HTMLImageElement) {
                return self.isImageValid(img);
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
            if (img.parentElement.tagName !== 'A' && self.isImageValid(img)) {
              img.addEventListener('click', function () {
                self.gallery.show();
              });
            }
        });
    }

    isImageValid(img) {
      return this.excludeClassNames.filter(name => img.classList.contains(name)).length == 0;
    }
}

document.addEventListener('DOMContentLoaded', () => {
    (new Gallery()).run();
});
