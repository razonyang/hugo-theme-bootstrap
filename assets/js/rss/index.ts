import Component from "js/component";
import { isSafari } from "../helper";

export default class RSS implements Component {
  run() {
    if (isSafari()) {
      document
        .querySelectorAll<HTMLLinkElement>('a[href$="index.xml"]')
        .forEach((feed) => {
          feed.href = feed.href.replace(/^https?/, "feed");
        });
    }
  }
}
