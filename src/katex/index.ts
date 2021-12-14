import './less/index.less';
import * as renderMathInElement from 'katex/dist/contrib/auto-render';

declare global {
  interface Window {
    katexOptions: any;
  }
}

document.addEventListener('DOMContentLoaded', () => {
  renderMathInElement(document.body, window.katexOptions);
});
