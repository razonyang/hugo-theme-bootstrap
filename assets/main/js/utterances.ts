import * as params from '@params';

class Utterances {
    run() {
        const self = this;
        var theme = params.utterances.theme;
        if (!theme) {
            document.addEventListener('hbs:mode', function(e) {
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
