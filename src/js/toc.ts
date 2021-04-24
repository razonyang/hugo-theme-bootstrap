import { Offcanvas } from 'bootstrap';

class TOC {
    instance: Offcanvas;

    constructor(public element: HTMLElement) {
        this.instance = new Offcanvas(element);
    }

    init() {
        const self = this;
        document.querySelectorAll('#TableOfContents a').forEach(function (ele) {
            ele.addEventListener('click', function () {
                self.hide();
            })
        })
    }

    hide() {
        this.instance.hide();
    }
}

export default TOC;
