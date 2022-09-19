import { default as params } from '@params';
import snackbar from 'js/snackbar';

class Client
{
    private apiUrl: string;

    constructor()
    {
        const endpoint = params.staticman.endpoint.replace(/\/*$/, "")
        const service = params.staticman.service ? params.staticman.service : 'github'
        const repo = params.staticman.repo
        const branch = params.staticman.branch ? params.staticman.branch : 'master'
        const property = params.staticman.property ? params.staticman.property : 'comments'
        this.apiUrl = `${endpoint}/v3/entry/${service}/${repo}/${branch}/${property}`
    }

    send(data) {
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
