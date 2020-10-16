const path = require('path');

module.exports = {
    entry: './src/js/app.js',
    output: {
        path: path.resolve(__dirname, 'assets/js'),
        filename: 'app.js'
    },
    mode: 'production'
};