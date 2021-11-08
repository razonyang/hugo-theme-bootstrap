class LoadingBar {
    bar: HTMLElement;

    run() {
        this.bar = document.createElement('div');
        this.bar.className = 'loading-bar';
        this.bar.hidden = true;
        document.body.appendChild(this.bar);
        const self = this;
        window.addEventListener('beforeunload', function() {
            self.bar.hidden = false;
        });
    }
}

document.addEventListener('DOMContentLoaded', () => {
  (new LoadingBar()).run();
});
