const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');

module.exports={
    entry:"./src/index.js",
    mode:"development",
    output:{
        filename:"main.[contenthash].js",
        path:path.resolve(__dirname, "build")
    },
    module:{
        rules:[
            {
                test:/\.scss$/,
                use:[
                    // Creates `style` nodes from JS strings
                    "style-loader",
                    // Translates CSS into CommonJS
                    "css-loader",
                    // Compiles Sass to CSS
                    "sass-loader",
                ]
            }
        ]
    },
    // devtool: 'source-map',
    plugins:[
        new HtmlWebpackPlugin({
            template:'./src/index.html'
        })
    ]
}


// 'use strict';

// const path = require('path');

// module.exports = {
//     entry: './index.js',
//     mode:"development",
//     context: path.resolve(__dirname),
//     output: {
//         path: path.resolve(__dirname, 'dist'),
//         filename: 'bundle.js',
//         publicPath: 'pathOrUrlWhenProductionBuild'
//     },
//     module: {
//         rules: [
//         ]
//     },
//     resolve: {
//     },
//     devtool: 'source-map',
//     plugins: [
//     ]
// };
