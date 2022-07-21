const purgecss = require('../../../../purgecss.config.js').default;

const autoprefixer = require('autoprefixer');
const rtlcss = require('rtlcss');

module.exports = {
  plugins: [autoprefixer, purgecss, rtlcss],
};
