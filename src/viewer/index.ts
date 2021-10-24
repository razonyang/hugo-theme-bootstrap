import Viewer from 'viewerjs';

declare global {
    interface Window {
      viewerOptions: any;
    }
}

class Gallery {
    gallery: Viewer;
    options: any;

    constructor() {
        this.options = window.viewerOptions;
        this.gallery = new Viewer(document.querySelector('main'), this.options);
    }

    run() {
        const self = this;
        document.querySelectorAll('img').forEach(function (img) {
            if (img.parentElement.tagName !== 'A') {
              img.addEventListener('click', function () {
                self.gallery.show();
              });
            }
        });
    }
}

document.addEventListener('DOMContentLoaded', () => {
    (new Gallery()).run();
});
