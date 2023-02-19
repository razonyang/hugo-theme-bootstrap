import Component from "js/component";

abstract class Form implements Component {
  protected form: HTMLFormElement;

  private btnSubmit: HTMLButtonElement;

  private locked = false;

  constructor(form: string) {
    this.form = document.getElementById(form) as HTMLFormElement;
  }

  run() {
    if (!this.form) {
      return;
    }

    this.btnSubmit = this.form.querySelector('button[type="submit"]');

    this.form.addEventListener("submit", (e) => {
      e.preventDefault();
      if (!this.form.checkValidity()) {
        e.stopPropagation();
        return;
      }

      if (this.locked !== false) {
        return;
      }

      this.lock();

      this.submit(new FormData(this.form)).finally(() => {
        this.unlock();
        this.reset();
      });
    });
  }

  abstract submit(data: FormData): Promise<void>;

  lock() {
    this.locked = true;
    this.btnSubmit.setAttribute("disabled", "true");
  }

  unlock() {
    this.locked = false;
    if (!this.form.hasAttribute("data-g-recaptcha-id")) {
      this.btnSubmit.removeAttribute("disabled");
    }
  }

  reset() {
    this.form.reset();

    const reCaptchaWidgetId = this.form.getAttribute("data-g-recaptcha-id");
    if (reCaptchaWidgetId) {
      window.grecaptcha.reset(reCaptchaWidgetId);
    }
  }
}

export default Form;
