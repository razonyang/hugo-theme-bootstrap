import renderMathInElement from 'katex/dist/contrib/auto-render'

document.addEventListener("DOMContentLoaded", function() {
  var posts = document.querySelectorAll('.post')
  if (posts) {
    posts.forEach(function(post) {
      renderMathInElement(post, {
      });
    })
  }
});
