class Snackbar {
    element: HTMLElement;

    constructor() {
        const e = document.createElement('div');
        e.className = 'snackbar';
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

const GlobalSnackbar = new Snackbar();
export default GlobalSnackbar;
