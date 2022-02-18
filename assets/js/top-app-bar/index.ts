import Component from "js/component";
import Snackbar from "js/snackbar";

class TopAppBar implements Component {
    run() {
        document.querySelector('.action-reload-page').addEventListener('click', function() {
            window.location.reload();
        });
        document.querySelector('.action-copy-url').addEventListener('click', function() {
            navigator.clipboard.writeText(window.location.href);
            Snackbar.show('Copied');
        });
    }
}

export default TopAppBar;
