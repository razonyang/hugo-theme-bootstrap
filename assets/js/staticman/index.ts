import client from "js/staticman/client";
import DateRenderer from "js/staticman/date-renderer";
import Form from "js/staticman/form";
import Reply from "js/staticman/reply";

class Staticman extends Form {
  submit(data: FormData): Promise<void> {
    return client.send(data);
  }
}

new Staticman("staticman-comment-form").run();

new Reply("staticman-reply-form", ".staticman-reply-button").run();

new DateRenderer(".staticman-comment-date").run();
