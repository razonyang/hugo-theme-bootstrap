import * as BSCollapse from 'bootstrap/js/dist/collapse';

class Collapse {
    run() {
        const self = this;
        document.querySelectorAll('.collapse').forEach((ele: HTMLElement) => {
            const instance = BSCollapse.getOrCreateInstance(ele, {
                toggle: false
            });
            ele.addEventListener('shown.bs.collapse', function () {
                ele.focus();
                self.onShow();
            });
            ele.addEventListener('hidden.bs.collapse', function () {
                self.onHide();
            });
            ele.addEventListener('focusout', function() {
                instance.hide();
            });
        });
    }

    onShow() {
        document.body.classList.add('overflow-hidden');
    }

    onHide() {
        document.body.classList.remove('overflow-hidden');
    }
}

(new Collapse()).run();
