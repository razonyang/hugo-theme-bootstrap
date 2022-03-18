const purgecss = require('@fullhuman/postcss-purgecss')({
  content: [ './hugo_stats.json' ],
  defaultExtractor: (content) => {
      let els = JSON.parse(content).htmlElements;
      return els.tags.concat(els.classes, els.ids);
  },
  safelist: [
    'bottom-0',
    'col-lg-10',
    'end-0',
    'fs-lg', 'fs-sm', 'fs-xl', 'fs-xs', 'fst-italic',
    'opacity-50',
    'pb-1', 'pe-3', 'pt-1', 'position-absolute',
    'show',
    'text-pre-wrap', 'text-uppercase', 'text-white', 'top-0',
  ]
});

const autoprefixer = require('autoprefixer');

module.exports = {
  plugins: [
    autoprefixer,
    purgecss,
  ]
}
