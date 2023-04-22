import { default as params } from '@params';

(() => {
    const lang = navigator.language || navigator.userLanguage

    // match the exact language code.
    if (lang in params.homes) {
        window.location.href = params.homes[lang]
        return
    }

    // match the main language code.
    const codes = lang.split('-')
    for (let lang in params.homes) {
        if (lang.indexOf(codes[0]) === 0) {
            window.location.href = params.homes[lang]
            return
        }
    }

    // fallback to the default language.
    window.location.href = params.fallback
})()
