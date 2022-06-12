const items = ['theme', 'palette'];
items.forEach(function (key) {
const value = localStorage.getItem('hbs-' + key);
  if (value) {
    document.body.parentElement.setAttribute('data-' + key, value);
  }
});
