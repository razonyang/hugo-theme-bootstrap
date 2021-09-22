import CodeBlock from './code-block';

class Code {
  static run() {
    document.querySelectorAll('.highlight').forEach((element: HTMLElement) => {
      const block = new CodeBlock(element);
      block.run();
    });
  }
}

document.addEventListener('DOMContentLoaded', () => {
  Code.run();
});
