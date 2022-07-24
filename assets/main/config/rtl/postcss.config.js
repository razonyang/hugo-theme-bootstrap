const autoprefixer = require('autoprefixer');
const rtlcss = require('rtlcss');

module.exports = {
  plugins: [
    autoprefixer,
    ...process.env.HUGO_ENVIRONMENT === 'production'
      ? [require('../../../../purgecss.config.js').default]
      : [],
    rtlcss
  ],
};
