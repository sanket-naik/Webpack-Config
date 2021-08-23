const path = require('path');
const common= require('./webpack.common')
const { merge } = require('webpack-merge');

let prod={
    mode:"production",
    output:{
        filename:"main.[contenthash].js",
        path:path.resolve(__dirname, "build")
    }
}



module.exports=merge(common, prod)