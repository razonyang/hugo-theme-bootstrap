const path = require('path');
const ESLintPlugin = require('eslint-webpack-plugin');
const CopyPlugin = require('copy-webpack-plugin');

module.exports = {
  entry: {
    main: './src/js/index.ts',
    search: ['./src/search/index.ts'],
    katex: ['./src/katex/index.ts', './src/katex/index.scss'],
    mermaid: ['./src/mermaid/index.ts'],
  },
  mode: 'production',
  output: {
    path: path.resolve(path.join(__dirname, 'assets', 'js')),
    filename: '[name].js'
  },
  module: {
    rules: [
      {
        test: /\.tsx?$/,
        use: ['babel-loader', 'ts-loader'],
        exclude: /node_modules/,
      },
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
  },
  resolve: {
    extensions: [ '.tsx', '.ts', '.js', 'jsx' ],
  },
  plugins: [
    new ESLintPlugin(),
    new CopyPlugin({
      patterns: [
        { 
          from: path.resolve(path.join(__dirname, 'node_modules/@fortawesome/fontawesome-free/webfonts')),
          to: path.resolve(path.join(__dirname, 'static/fonts')),
        },
      ],
    }),
  ]
};
