const path = require('path');
const CopyPlugin = require("copy-webpack-plugin");
const PATHS = {
  static: path.join(__dirname, 'static'),
  node_modules: path.join(__dirname, 'node_modules')
}

module.exports = {
  mode: 'production',
  entry: {},
  plugins: [
    new CopyPlugin({
      patterns: [
        { from: path.join(PATHS.node_modules, "katex/dist/fonts"), to: path.join(PATHS.static, "assets/katex/fonts") },
      ],
    }),
  ]
};
