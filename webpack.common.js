const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');

module.exports={
    entry:"./src/index.js",
    plugins:[
        new HtmlWebpackPlugin({
            template:'./src/index.html',
            minify: {
                removeComments: true,
                collapseWhitespace: true,
                removeAttributeQuotes: true
            },
            chunksSortMode: 'manual'
        })
    ],
    module:{
        rules:[
            {
                test:/\.(scss)$/,
                use:[
                    // Creates `style` nodes from JS strings
                    "style-loader",
                    // Translates CSS into CommonJS
                    "css-loader",
                    // Compiles Sass to CSS
                    "sass-loader"
                ]
            },
            {
                test: /\.html$/i,
                loader: 'html-loader',
                options: {
                  // Disables attributes processing
                  sources: true,
                },
            },
            {
                test: /\.(png|jpe?g|gif|svg)$/i,
                use: [
                  {
                    loader: 'file-loader',
                    options: {
                        name:"[name].[hash].[ext]",
                        outputPath:"assets"
                    }
                  }
                ]
                //loads the files or images n copies 
            }
        ]
    },
    stats: {
        children: true,
      },
    // devtool: 'source-map',
   
}