class SidebarToggler {
    btn: HTMLElement;
    main: HTMLElement;
    sidebar: HTMLElement;

    constructor(public button: HTMLElement) {
        this.btn = button;
    }

    init() {
        this.main = document.querySelector('.content>div:first-child')
        this.sidebar = document.querySelector('.content .sidebar')
        const self = this
        this.btn.addEventListener('click', function () {
            self.toggle();
        })
    }

    toggle() {
        if (this.main.classList.contains('col-lg-8')) {
            this.hide()
        } else {
            this.show()
        }
    }

    hide() {
        this.main.classList.replace('col-lg-8', 'col-lg-12')
        this.sidebar.classList.add('d-none')
    }

    show() {
        this.main.classList.replace('col-lg-12', 'col-lg-8')
        this.sidebar.classList.remove('d-none')
    }
}

export default SidebarToggler;
