
const stats = './hugo_stats.json';
const fs = require('fs');
fs.access(stats, fs.F_OK, (err) => {
  if (err) {
    throw new Error('Hugo stats file not found, please turn on the build.writeStats.\n\n# /config/_default/config.toml\n[build]\n  writeStats = true\n')
  }
});

const purgecss = require('@fullhuman/postcss-purgecss')({
  content: [ stats, "./extra_stats.json" ],
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
      'was-validated',
    ],
    // deep: [/blue$/],
    greedy: [/carousel-indicators$/]
  },
  dynamicAttributes: ["data-bs-popper"]
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
