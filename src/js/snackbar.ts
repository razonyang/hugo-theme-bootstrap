class Snackbar {
    element: HTMLElement;

    delay: number = 3000;

    constructor() {
        const e = document.createElement('div');
        e.className = 'snackbar';
        document.body.appendChild(e);
        this.element = e;
    }

    show(body: String) {
        this.element.innerHTML = '<div class="snackbar-body">' + body + '</div>';
        this.element.classList.add('show');
        const self = this;
        setTimeout(function() {
            self.element.classList.remove('show');
        }, this.delay);
    }
}

const GlobalSnackbar = new Snackbar();
export default GlobalSnackbar;
