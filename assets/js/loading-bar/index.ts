import Component from "js/component";

class LoadingBar implements Component {
    bar: HTMLElement;

    run() {
        this.bar = document.createElement('div');
        this.bar.className = 'loading-bar position-fixed top-0';
        this.bar.hidden = true;
        document.body.appendChild(this.bar);
        const self = this;
        window.addEventListener('beforeunload', function() {
            self.bar.hidden = false;
        });
    }
}

export default LoadingBar;
