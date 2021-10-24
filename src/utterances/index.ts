class Utterances {
    config: any;

    constructor() {
        this.config = window.params.utterances;
    }

    run() {
        const self = this;
        var theme = this.config.theme;
        if (theme == '') {
            document.addEventListener('hbs:mode', function(e: CustomEvent) {
                self.rerender(self.getTheme(e.detail.mode));
            });
            setTimeout(function() {
                self.rerender('github-' + localStorage.getItem('hbs-mode'));
            }, 2000);
        }
    }

    getTheme(mode) {
        return mode === 'dark' ? 'github-dark' : 'github-light';
    }

    rerender(theme) {
        const msg = {
            type: 'set-theme',
            theme: theme
        };
        const iframe = document.querySelector<HTMLIFrameElement>('.utterances-frame');
        iframe?.contentWindow?.postMessage(msg, 'https://utteranc.es');
    }
}

document.addEventListener('DOMContentLoaded', () => {
  (new Utterances()).run();
});
