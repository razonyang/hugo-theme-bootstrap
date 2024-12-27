import Component from "js/component";
import { isSafari } from "js/helper";

export default class RSS implements Component {
  run() {
    if (true || isSafari()) {
      document
        .querySelectorAll<HTMLLinkElement>("a[data-rss-feed]")
        .forEach((link) => {
          link.href = "feed:" + link.href;
        });
    }
  }
}
