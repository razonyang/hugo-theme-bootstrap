class SettingsOffcanvasListener {
    private settingsOffCanvas: Element;
    private enabledClass = 'offcanvas-enabled';

    constructor(settingsOffCanvas) {
        this.settingsOffCanvas = settingsOffCanvas;
    }


    run() {
        const self = this;
        this.settingsOffCanvas.addEventListener('show.bs.offcanvas', function () {
            document.body.classList.add(self.enabledClass);
        });

        this.settingsOffCanvas.addEventListener('hide.bs.offcanvas', function () {
            document.body.classList.remove(self.enabledClass);
        });
    }
}

export default SettingsOffcanvasListener;
