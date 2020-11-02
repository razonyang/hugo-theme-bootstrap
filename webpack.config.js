const path = require('path');

module.exports = {
  entry: {
    main: './src/js/index.js',
    search: ['./src/search.js', './src/search.scss'],
    katex: ['./src/katex.js', './src/katex.scss'],
  },
  mode: 'production',
  output: {
    path: path.resolve(path.join(__dirname, 'assets', 'js')),
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
      },
      {
        test: /\.(ttf|woff2?)$/i,
        use: [
          {
            loader: 'file-loader',
            options: {
              name: '[name].[ext]',
              outputPath: '../../static/fonts',
              publicPath: '/fonts'
            },
          },
        ],
      }
    ],
  }
};
