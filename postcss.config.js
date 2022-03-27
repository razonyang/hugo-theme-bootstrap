const purgecss = require('@fullhuman/postcss-purgecss')({
  content: [ './hugo_stats.json' ],
  defaultExtractor: (content) => {
      let els = JSON.parse(content).htmlElements;
      return els.tags.concat(els.classes, els.ids);
  },
  safelist: {
    standard: [
      'active',
      'bottom-0',
      'col-lg-10',
      'd-flex',
      'end-0',
      'fs-lg', 'fs-sm', 'fs-xl', 'fs-xs', 'fst-italic',
      'justify-content-center',
      'mb-0',
      'opacity-0', 'opacity-50',
      'pe-3', 'pt-1', 'position-absolute', 'position-fixed', 'position-relative', 'position-sticky',
      'show',
      'text-pre-wrap', 'text-uppercase', 'text-white', 'top-0',
      'w-100',
    ],
    // deep: [/blue$/],
    greedy: [/carousel-indicators$/]
  }
});

const autoprefixer = require('autoprefixer');
const rtlcss = require('rtlcss');

module.exports = {
  plugins: [
    rtlcss,
    autoprefixer,
    purgecss,
  ]
}
