'use strict';

const path = require('path');

module.exports = {
    entry: './index.js',
    mode:"development",
    context: path.resolve(__dirname),
    output: {
        path: path.resolve(__dirname, 'dist'),
        filename: 'bundle.js',
        publicPath: 'pathOrUrlWhenProductionBuild'
    },
    module: {
        rules: [
        ]
    },
    resolve: {
    },
    devtool: 'source-map',
    plugins: [
    ]
};
