import GlobalSnackbar from "./snackbar";

class TopAppBar {
    static run() {
        document.querySelector('.action-reload-page').addEventListener('click', function() {
            window.location.reload();
        });
        document.querySelector('.action-copy-url').addEventListener('click', function() {
            navigator.clipboard.writeText(window.location.href);
            GlobalSnackbar.show('Copied');
        });
    }
}

TopAppBar.run();
