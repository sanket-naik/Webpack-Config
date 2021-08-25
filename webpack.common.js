const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');

module.exports={
    entry:"./src/index.js",
    output: {
       assetModuleFilename: 'assets/[name].[hash][ext]'
      },
    plugins:[
        new HtmlWebpackPlugin({
            template:'./src/index.html',
        })
    ],
    module:{
        rules:[
            {
                test: /\.html$/,
                use:["html-loader"]
            },
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
    // devtool: 'source-map',
   
}