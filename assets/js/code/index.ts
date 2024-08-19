import Component from "js/component";
import CodeBlock from "./code-block";

class Code implements Component {
  run() {
    document.addEventListener('DOMContentLoaded', () => {
      document.querySelectorAll(".highlight").forEach((element: HTMLElement) => {
        const block = new CodeBlock(element);
        block.run();
      });
    })
  }
}

export default Code;
