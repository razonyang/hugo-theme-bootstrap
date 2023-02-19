import { default as params } from "@params";
import snackbar from "js/snackbar";

class Client {
  private apiUrl: string;

  private reCaptchaKey = "";
  private reCaptchaSecret = "";

  private moderation: boolean;

  constructor() {
    const endpoint = params.staticman.endpoint.replace(/\/*$/, "");
    const service = params.staticman.service
      ? params.staticman.service
      : "github";
    const repo = params.staticman.repo;
    const branch = params.staticman.branch ? params.staticman.branch : "master";
    const property = params.staticman.property
      ? params.staticman.property
      : "comments";
    this.reCaptchaKey = params.staticman.recaptchakey
      ? params.staticman.recaptchakey
      : "";
    this.reCaptchaSecret = params.staticman.recaptchasecret
      ? params.staticman.recaptchasecret
      : "";
    this.moderation =
      "moderation" in params.staticman ? params.staticman.moderation : true;
    this.apiUrl = `${endpoint}/v3/entry/${service}/${repo}/${branch}/${property}`;
  }

  send(form: FormData) {
    const reCaptchaToken = form.get("reCaptchaToken");
    if (this.reCaptchaKey && !reCaptchaToken) {
      throw new Error("reCaptcha token missing");
    }

    const slug = form.get("slug");

    const data = {
      "g-recaptcha-response": reCaptchaToken,
      options: {
        slug: slug,
        reCaptcha: {
          siteKey: this.reCaptchaKey,
          secret: this.reCaptchaSecret,
        },
      },
      fields: {
        reply_to: form.get("reply_to"),
        root_id: form.get("root_id"),
        name: form.get("name"),
        email: form.get("email"),
        message: form.get("message"),
        url: form.get("url"),
      },
    };

    return fetch(this.apiUrl, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(data),
    })
      .then((response) => {
        return response.json();
      })
      .then((data) => {
        if (data.success === true) {
          snackbar.show(this.sucessMessage(), 5000);
        } else if (data.message) {
          snackbar.show(data.message);
        } else {
          snackbar.show(data.error.text);
        }
      })
      .catch((err) => {
        console.error(err);
        snackbar.show("Comment failed.");
      });
  }

  sucessMessage(): string {
    if (this.moderation) {
      return "Comment successfully submitted! Your message will be shown once our moderators review it.";
    }

    return "Comment successfully submitted! Your message will be shown in a few minutes.";
  }
}

const client = new Client();

export default client;
