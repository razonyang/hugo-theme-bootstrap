
const autoprefixer = require('autoprefixer');

module.exports = {
  plugins: [
    autoprefixer,
    ...process.env.HUGO_ENVIRONMENT === 'production'
      ? [require('./purgecss.config.js').default]
      : [],
  ]
}
