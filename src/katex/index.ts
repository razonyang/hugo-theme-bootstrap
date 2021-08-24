import * as renderMathInElement from 'katex/dist/contrib/auto-render';

declare global {
  interface Window {
    params: any;
  }
}

document.addEventListener('DOMContentLoaded', () => {
  renderMathInElement(document.body, window.params.katex);
});
