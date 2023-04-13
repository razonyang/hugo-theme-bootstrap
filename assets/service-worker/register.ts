(() => {
    if ('serviceWorker' in navigator) {
        window.addEventListener('load', () => {
            navigator.serviceWorker.register('{{ .src }}').then(() => {
            }).catch(function (err) {
                throw new Error(`Error whilst registering service worker: ${err.Error}`)
            });
        });
    } else {
        throw new Error('You browser does not support service worker.')
    }
})()
