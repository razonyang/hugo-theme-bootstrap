const path = require('path');
const copyPlugin = require('copy-webpack-plugin');
const basePath = path.resolve(__dirname);

module.exports = {
    entry: './src/js/app.js',
    output: {
        path: path.resolve(__dirname, 'assets/js'),
        filename: 'app.js'
    },
    mode: 'production',
    plugins: [
      new copyPlugin({
        patterns: [
          { from: 'node_modules/bootstrap/dist/css/bootstrap.min.css', to: basePath+'/static/css/bootstrap.min.css' },
          { from: 'node_modules/bootstrap/dist/css/bootstrap.min.css.map', to: basePath+'/static/css/bootstrap.min.css.map' },
          { from: 'node_modules/bootstrap/dist/js/bootstrap.bundle.min.js', to: basePath+'/static/js/bootstrap.bundle.min.js' },
          { from: 'node_modules/bootstrap/dist/js/bootstrap.bundle.min.js.map', to: basePath+'/static/js/bootstrap.bundle.min.js.map' },
          { from: 'node_modules/@fortawesome/fontawesome-free/css/all.min.css', to: basePath+'/static/css/fontawesome.all.min.css' },
          { from: 'node_modules/@fortawesome/fontawesome-free/webfonts', to: basePath+'/static/webfonts' },
        ],
      }),
    ]
};