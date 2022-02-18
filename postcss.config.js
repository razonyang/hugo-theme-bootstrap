const purgecss = require('@fullhuman/postcss-purgecss')({
  content: [ './hugo_stats.json' ],
  defaultExtractor: (content) => {
      let els = JSON.parse(content).htmlElements;
      return els.tags.concat(els.classes, els.ids);
  },
  safelist: [
    'col-lg-10',
    'fs-lg', 'fs-sm', 'fs-xl', 'fs-xs',
    'text-pre-wrap',
  ]
});

const autoprefixer = require('autoprefixer');

module.exports = {
  plugins: [
    autoprefixer,
    purgecss,
    require('postcss-discard-comments')({
      removeAll: true,
    }),
  ]
}
