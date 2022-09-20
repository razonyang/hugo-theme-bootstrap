import { default as params } from '@params';
import snackbar from 'js/snackbar';

class Client
{
    private apiUrl: string;

    private reCaptchaKey = '';
    private reCaptchaSecret = '';

    constructor()
    {
        const endpoint = params.staticman.endpoint.replace(/\/*$/, "")
        const service = params.staticman.service ? params.staticman.service : 'github'
        const repo = params.staticman.repo
        const branch = params.staticman.branch ? params.staticman.branch : 'master'
        const property = params.staticman.property ? params.staticman.property : 'comments'
        this.reCaptchaKey = params.staticman.recaptchakey ? params.staticman.recaptchakey : '';
        this.reCaptchaSecret = params.staticman.recaptchasecret ? params.staticman.recaptchasecret : '';
        this.apiUrl = `${endpoint}/v3/entry/${service}/${repo}/${branch}/${property}`
    }

    send(form: FormData) {
        const reCaptchaToken = form.get('reCaptchaToken')
        if (this.reCaptchaKey && !reCaptchaToken) {
            throw new Error('reCaptcha token missing')
        }

        let slug = form.get('slug')

        const rootId = form.get('root_id')
        const replyTo = form.get('reply_to')
        if (rootId && replyTo) {
            slug += '/' + rootId
        }

        const data = {
            'g-recaptcha-response': reCaptchaToken,
            options: {
                slug: slug,
                reCaptcha: {
                    siteKey: this.reCaptchaKey,
                    secret: this.reCaptchaSecret,
                },
            },
            fields: {
                reply_to: replyTo,
                name: form.get('name'),
                email: form.get('email'),
                message: form.get('message'),
                url: form.get('url'),
            },
        }

        return fetch(this.apiUrl, {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify(data),
        }).then((response) => {
            return response.json();
        }).then((data) => {
            if (data.success === true) {
                snackbar.show('Success.');
            } else {
                snackbar.show(data.error.text);
            }
        }).catch((err) => {
            console.error(err)
            snackbar.show('Failed to comment.');
        })
    }
}

const client = new Client();

export default client;
