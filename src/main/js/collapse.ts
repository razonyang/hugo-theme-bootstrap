import * as BSCollapse from 'bootstrap/js/dist/collapse';

class Collapse {
    run() {
        const self = this;
        document.querySelectorAll('.collapse').forEach((ele: HTMLElement) => {
            const instance = BSCollapse.getOrCreateInstance(ele, {
                toggle: false
            });
            ele.addEventListener('focusout', function (e: MouseEvent) {
                if (ele.contains(<Node>(e.relatedTarget))) {
                    return;
                }
                setTimeout(function() {
                    instance.hide();
                }, 200);
            });
            ele.addEventListener('shown.bs.collapse', function () {
                self.onShow();
                ele.focus();
            });
            ele.addEventListener('hidden.bs.collapse', function () {
                self.onHide();
            });
        });
    }

    onShow() {
        if (window.innerWidth < 992) {
            document.body.classList.add('overflow-hidden');
        }
    }

    onHide() {
        document.body.classList.remove('overflow-hidden');
    }
}

(new Collapse()).run();
