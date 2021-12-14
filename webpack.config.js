const path = require('path');
const glob = require('glob-all');
const ESLintPlugin = require('eslint-webpack-plugin');
const TerserPlugin = require("terser-webpack-plugin");
const MiniCssExtractPlugin = require("mini-css-extract-plugin");
const PurgecssPlugin = require('purgecss-webpack-plugin');
const PATHS = {
  assets: path.join(__dirname, 'assets'),
  layouts: path.join(__dirname, 'layouts'),
  src: path.join(__dirname, 'src'),
  static: path.join(__dirname, 'static')
}

module.exports = {
  entry: {
    main: './src/main/index.ts',
    icons: './src/icons/index.js',
    search: './src/search/index.ts',
    katex: './src/katex/index.ts',
    mermaid: './src/mermaid/index.ts',
    utterances: './src/utterances/index.ts',
    viewer: './src/viewer/index.ts',
    'service-worker': './src/service-worker/index.ts',
  },
  mode: 'production',
  optimization: {
    usedExports: true,
    minimize: true,
    minimizer: [new TerserPlugin({
      terserOptions: {
        format: {
          comments: false,
        },
      },
      extractComments: false,
    })],
  },
  output: {
    path: PATHS.assets,
    filename: '[name]/index.js'
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
          MiniCssExtractPlugin.loader,
          {
            loader: 'css-loader',
            options: {
              url: false,
            }
          },
          {
            loader: 'postcss-loader'
          },
          {
            loader: 'sass-loader'
          }
        ]
      },
      {
          test: /\.less$/,
          use: [
              MiniCssExtractPlugin.loader,
              {
                loader: 'css-loader',
                options: {
                  url: false,
                }
              },
              {
                  loader: 'less-loader',
              },
          ],
      },
      {
        test: /\.(ttf|woff2?)$/i,
        use: [
          {
            loader: 'file-loader',
            options: {
              name: '[name].[ext]',
              outputPath:  path.join(PATHS.static, 'fonts'),
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
    new MiniCssExtractPlugin({
      filename: '[name]/index.css'
    }),
    new PurgecssPlugin({
      paths: glob.sync([`${PATHS.layouts}/**/*`, `${PATHS.src}/main/js/*`, `${PATHS.src}/search/js/*`],  { nodir: true }),
      only: ['main']
    }),
  ]
};
