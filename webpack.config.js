const path = require('path');

module.exports = {
  entry: {
    main: ['./src/main.js', './src/main.scss'],
    search: ['./src/search.js', './src/search.scss'],
  },
  mode: 'production',
  output: {
    path: path.resolve(path.join(__dirname, 'assets')),
    filename: '[name].js'
  },
  module: {
    rules: [
      {
        test: /\.(scss)$/,
        use: [
          {
            loader: 'style-loader'
          },
          {
            loader: 'css-loader'
          },
          {
            loader: 'postcss-loader',
            options: {
              postcssOptions: {
                // postcss plugins, can be exported to postcss.config.js
                plugins: [
                  'autoprefixer'
                ]
              }
            }
          },
          {
            loader: 'sass-loader'
          }
        ]
      }
    ],
  }
};
