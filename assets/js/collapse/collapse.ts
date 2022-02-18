import { default as BSCollapse } from 'bootstrap/js/src/collapse';
import Component from 'js/component';

class Collapse implements Component {
    run() {
        const self = this;
        document.querySelectorAll('.collapse').forEach((ele: HTMLElement) => {
            const instance = new BSCollapse(ele, {
                toggle: false
            });
            const hide = ele.getAttribute('data-bs-hide');
            if (hide) {
                ele.addEventListener(hide, function (e: MouseEvent) {
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
            }
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

export default Collapse;
