const path = require('path');
const common= require('./webpack.common')
const { merge } = require('webpack-merge');
const HtmlWebpackPlugin = require('html-webpack-plugin');

let dev={
    mode:"development",
    output:{
        filename:"[name].bundle.js",
        path:path.resolve(__dirname, "build")
    },
    plugins:[
        new HtmlWebpackPlugin({
            template:'./src/index.html',
            minify:false
        })
    ],
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
                    "sass-loader"
                ]
            },
        ]
    }
}


module.exports=merge(common, dev)