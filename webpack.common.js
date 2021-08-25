const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');

module.exports={
    entry:{
        main: "./src/index.js",
        secondary: "./src/anotherBundle.js"
    },
    output: {
       assetModuleFilename: 'assets/[name].[hash][ext]'
      },
    module:{
        rules:[
            {
                test: /\.html$/,
                use:["html-loader"]
            },
           
        ]
    }
    // devtool: 'source-map',
   
}