class DocsCatalog {
    static run() {
        const active = document.querySelector('.docs-catalog li.active') as HTMLElement;
        if (active) {
            active.focus();
        }
    }
}

DocsCatalog.run();
