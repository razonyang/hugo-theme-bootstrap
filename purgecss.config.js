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
      'badge', 'bg-secondary',
      'bottom-0',
      'btn-link', 'btn-primary', 'btn-outline-primary',
      'collapse',
      'col-xxl-10',
      'd-flex',
      'end-0',
      'flex-column', 'fs-lg', 'fs-sm', 'fs-xl', 'fs-xs', 'fst-italic',
      'justify-content-center',
      'm-1', 'mb-0', 'mb-1', 'my-1', 'my-2', 'mx-2', 'mb-2',
      'list-unstyled',
      'offcanvas-backdrop',
      'opacity-0', 'opacity-50', 'opacity-100', 'overflow-hidden',
      'p-1', 'pb-0', 'pe-3', 'pt-0', 'pt-1', 'px-2', 'py-1', 'px-3', 'py-2', 'p-2', 'position-absolute', 'position-fixed', 'position-relative', 'position-sticky',
      'rounded', 'rounded-top',
      'show', 'start-50',
      'text-nowrap', 'text-pre-wrap', 'text-uppercase', 'text-white', 'top-0', 'top-50', 'text-bg-secondary', 'text-success', 'text-truncate',
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
