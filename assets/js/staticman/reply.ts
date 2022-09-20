import Component from "js/component";
import client from "./client";

class Reply implements Component
{
    private buttons: Array<HTMLButtonElement>;

    private form: HTMLFormElement;

    private lock = false;

    constructor(form: string, buttons: string)
    {
        this.form = document.getElementById(form) as HTMLFormElement;
        this.buttons = Array.from(document.querySelectorAll(buttons)) as Array<HTMLButtonElement>;
    }

    run()
    {
        if (!this.form) {
            return;
        }

        const replyTo: HTMLInputElement = this.form.querySelector('input[name="reply_to"]');
        const rootId: HTMLInputElement = this.form.querySelector('input[name="root_id"]');

        const button = this.form.querySelector('button[type="submit"]');

        const close = document.querySelector('#comment-reply-modal .btn-close') as HTMLButtonElement;

        this.form.addEventListener('submit', (e) => {
            e.preventDefault()
            if (!this.form.checkValidity()) {
                e.stopPropagation()
                return;
            }

            if (this.lock !== false) {
                return;
            }

            this.lock = true;
            button.setAttribute('disabled', 'true');

            const formData = new FormData(this.form)
            const rootId = formData.get('root_id');
            const replyTo = formData.get('reply_to');
            if (!rootId || !replyTo) {
                throw new Error('invalid action');
            }

            client.send(formData).finally(() => {
                this.lock = false;
                button.removeAttribute('disabled');
                close.click();
                this.form.reset();
            });
        })

        this.buttons.forEach((button) => {
            button.addEventListener('click', (e) => {
                document.getElementById('comment-reply-modal-to').innerText = '@' + button.getAttribute('data-comment-name');
                rootId.value = button.getAttribute('data-root-id');
                replyTo.value = button.getAttribute('data-comment-id');
            });
        })
    }
}

export default Reply;
