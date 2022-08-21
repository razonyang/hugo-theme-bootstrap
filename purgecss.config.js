const stats = './hugo_stats.json';
const fs = require('fs');
fs.access(stats, fs.F_OK, (err) => {
  if (err) {
    throw new Error('Hugo stats file not found, please turn on the "build.writeStats". See also https://hbs.razonyang.com/v1/en/docs/getting-started/prerequisites/#configuration.')
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
      'btn-primary', 'btn-outline-primary',
      'col-lg-10',
      'd-flex',
      'end-0',
      'fs-lg', 'fs-sm', 'fs-xl', 'fs-xs', 'fst-italic',
      'justify-content-center',
      'mb-0',
      'offcanvas-backdrop',
      'opacity-0', 'opacity-50', 'opacity-100', 'overflow-hidden',
      'p-1', 'pe-3', 'pt-0', 'pt-1', 'px-3', 'py-2', 'position-absolute', 'position-fixed', 'position-relative', 'position-sticky',
      'rounded', 'rounded-top',
      'show',
      'text-nowrap', 'text-pre-wrap', 'text-uppercase', 'text-white', 'top-0', 'text-bg-secondary', 'text-success', 'text-truncate',
      'user-select-all',
      'w-100',
      'was-validated',
    ],
    // deep: [/blue$/],
    greedy: [/carousel-indicators$/]
  },
  dynamicAttributes: ['data-bs-popper', 'data-bs-theme', 'data-palette', 'role', 'placeholder-shown']
});

exports.default = purgecss;
