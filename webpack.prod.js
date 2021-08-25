const path = require('path');
const common= require('./webpack.common')
const { merge } = require('webpack-merge');
const { CleanWebpackPlugin } = require('clean-webpack-plugin');

let prod={
    mode:"production",
    output:{
        filename:"main.[contenthash].js",
        path:path.resolve(__dirname, "build")
    },
    plugins:[
        new CleanWebpackPlugin()
    ]
}



module.exports=merge(common, prod)