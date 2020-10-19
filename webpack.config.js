const path = require('path');
const copyPlugin = require('copy-webpack-plugin');
const basePath = path.resolve(__dirname);

module.exports = {
    entry: {},
    mode: 'production',
    output: {
      path: __dirname + '/static'
    },
    plugins: [
      new copyPlugin({
        patterns: [
          { from: 'node_modules/bootstrap/dist/css/bootstrap.min.css', to: 'css/bootstrap.min.css', toType: 'file' },
          { from: 'node_modules/bootstrap/dist/css/bootstrap.min.css.map', to: 'css/bootstrap.min.css.map', toType: 'file' },
          { from: 'node_modules/bootstrap/dist/js/bootstrap.bundle.min.js', to: 'js/bootstrap.bundle.min.js', toType: 'file' },
          { from: 'node_modules/bootstrap/dist/js/bootstrap.bundle.min.js.map', to: 'js/bootstrap.bundle.min.js.map', toType: 'file' },
          { from: 'node_modules/@fortawesome/fontawesome-free/css/all.min.css', to: 'css/fontawesome.all.min.css', toType: 'file' },
          { from: 'node_modules/@fortawesome/fontawesome-free/webfonts', to: 'webfonts', toType: 'dir' },
        ],
      }),
    ]
};