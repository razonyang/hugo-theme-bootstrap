import {default as params} from '@params';
window.reCaptchaLabel = document.querySelector('#reCaptchaLabel');
window.reCaptchaOnload = function () {
    document.querySelector('#g-recaptcha-response').setAttribute("required", 'true');
}
window.reCaptchaCallback = function() {
    reCaptchaLabel.classList.remove('text-danger');
    reCaptchaLabel.classList.add('text-success');
}

window.reCaptchaExpiredCallback = function() {
    reCaptchaLabel.classList.remove('text-success');
    reCaptchaLabel.classList.add('text-danger');
}

window.renderCaptchas = () => {
    document.querySelectorAll('.g-recaptcha').forEach(function(item) {
        const form = item.parentElement.closest('form')
        const button = form.querySelector('button[type="submit"]')
        const tokenInput = form.querySelector('input[name="reCaptchaToken"]')
        const id = grecaptcha.render(item, {
            sitekey : params.key,
            theme: document.documentElement.getAttribute('data-bs-theme'),
            callback: function(token) {
                tokenInput.value = token
                button.removeAttribute('disabled')
            },
            'expired-callback': function() {
                button.setAttribute('disabled', 'true')
            },
            'error-callback': function() {
                button.setAttribute('disabled', 'true')
            },
        });
        form.setAttribute('data-g-recaptcha-id', id);
    })
}
