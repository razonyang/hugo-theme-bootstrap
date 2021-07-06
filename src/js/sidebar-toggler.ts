class SidebarToggler {
    btn: HTMLElement;
    main: HTMLElement;
    sidebar: HTMLElement;
    key: string = 'hbs-sidebar-toggler'

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

        
        const val = localStorage.getItem(this.key);
        if (val === 'hide' && this.isShown()) {
            this.hide()
        }
    }

    toggle() {
        if (this.isShown()) {
            this.hide()
        } else {
            this.show()
        }
    }

    isShown() {
        return this.main.classList.contains('col-lg-8')
    }

    hide() {
        this.main.classList.replace('col-lg-8', 'col-lg-12')
        this.sidebar.classList.add('d-none')
        localStorage.setItem(this.key, 'hide')
    }

    show() {
        this.main.classList.replace('col-lg-12', 'col-lg-8')
        this.sidebar.classList.remove('d-none')
        localStorage.removeItem(this.key)
    }
}

export default SidebarToggler;
