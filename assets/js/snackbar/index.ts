class Snackbar {
    element: HTMLElement;

    constructor() {
        const e = document.createElement('div');
        e.className = 'snackbar opacity-0 position-fixed w-100 d-flex justify-content-center';
        document.body.appendChild(e);
        this.element = e;
    }

    show(body: String, duration: number = 2000) {
        this.element.innerHTML = '<div class="snackbar-body">' + body + '</div>';
        this.element.classList.add('show');
        const self = this;
        setTimeout(function() {
            self.element.classList.remove('show');
        }, duration);
    }
}

const snackbar = new Snackbar();
export default snackbar;
