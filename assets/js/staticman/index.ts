import Component from "js/component";
import client from "js/staticman/client";
import DateRenderer from "js/staticman/date-renderer";
import Reply from "js/staticman/reply";

class Staticman implements Component
{
    private form: HTMLFormElement;

    private lock = false;

    constructor(form: string, replyForm: string, replyButtons: string, dateItems: string) {
        this.form = document.getElementById(form) as HTMLFormElement;

        (new Reply(replyForm, replyButtons)).run();

        (new DateRenderer(dateItems)).run();
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
            client.send(formData).finally(() => {
                this.lock = false;
                button.removeAttribute('disabled');
                this.form.reset();
            });
        });
    }
}

(new Staticman('staticman-comment-form', 'staticman-reply-form', '.staticman-reply-button', '.staticman-comment-date')).run();
