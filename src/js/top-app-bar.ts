class TopAppBar {
    static run() {
        document.querySelector('#pageReloader').addEventListener('click', function() {
            window.location.reload();
        });
    }
}

TopAppBar.run();
