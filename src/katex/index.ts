import * as renderMathInElement from 'katex/dist/contrib/auto-render';

document.addEventListener('DOMContentLoaded', () => {
  const posts = document.querySelectorAll('.post');
  if (posts) {
    posts.forEach((post) => {
      renderMathInElement(post, {
      });
    });
  }
});
