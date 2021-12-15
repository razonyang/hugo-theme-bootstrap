const path = require('path');
const TerserPlugin = require("terser-webpack-plugin");

module.exports = {
  entry: {
    custom: './src/custom/index.js',
    icons: './src/icons/index.js',
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
      extractComments: false
    })],
  },
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
    ],
  },
  resolve: {
    extensions: [ '.tsx', '.ts', '.js', 'jsx' ],
  },
};
