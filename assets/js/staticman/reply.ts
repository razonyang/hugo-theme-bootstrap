import client from "js/staticman/client";
import Form from "js/staticman/form";

class Reply extends Form {
  private buttons: Array<HTMLButtonElement>;

  private modalCloseBtn: HTMLButtonElement;

  constructor(form: string, buttons: string) {
    super(form);
    this.buttons = Array.from(
      document.querySelectorAll(buttons)
    ) as Array<HTMLButtonElement>;
    this.modalCloseBtn = document.querySelector(
      "#comment-reply-modal .btn-close"
    ) as HTMLButtonElement;
  }

  run() {
    super.run();

    if (!this.form) {
      return;
    }

    const replyTo: HTMLInputElement = this.form.querySelector(
      'input[name="reply_to"]'
    );
    const rootId: HTMLInputElement = this.form.querySelector(
      'input[name="root_id"]'
    );

    this.buttons.forEach((button) => {
      button.addEventListener("click", () => {
        document.getElementById("comment-reply-modal-to").innerText =
          "@" + button.getAttribute("data-comment-name");
        rootId.value = button.getAttribute("data-root-id");
        replyTo.value = button.getAttribute("data-comment-id");
      });
    });
  }

  reset(): void {
    super.reset();

    this.modalCloseBtn.click();
  }

  submit(data: FormData): Promise<void> {
    const rootId = data.get("root_id");
    const replyTo = data.get("reply_to");
    if (!rootId || !replyTo) {
      throw new Error("invalid action");
    }

    return client.send(data);
  }
}

export default Reply;
