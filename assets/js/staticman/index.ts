import Component from "js/component";
import client from "js/staticman/client";
import Reply from "js/staticman/reply";

class Staticman implements Component
{
    private form: HTMLFormElement;

    private lock = false;

    constructor(form: string, replyForm: string, replyButtons: string) {
        this.form = document.getElementById(form) as HTMLFormElement;

        (new Reply(replyForm, replyButtons)).run();
    }

    run() {
        if (!this.form) {
            return;
        }

        const button = this.form.querySelector('button[type="submit"]');

        this.form.addEventListener('submit', (e) => {
            e.preventDefault();

            if (this.lock !== false) {
                return;
            }

            this.lock = true;
            button.setAttribute('disabled', 'true');
            
            const formData = new FormData(this.form)
            const data = {
                options: {
                    slug: formData.get('slug'),
                },
                fields: {
                    name: formData.get('name'),
                    email: formData.get('email'),
                    message: formData.get('message'),
                },
            }
            client.send(data).finally(() => {
                this.lock = false;
                button.removeAttribute('disabled');
                this.form.reset();
            });
        });
    }
}

(new Staticman('staticman-comment-form', 'staticman-reply-form', '.staticman-reply-button')).run();
