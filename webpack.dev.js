const path = require('path');
const common= require('./webpack.common')
const { merge } = require('webpack-merge');

let dev={
    mode:"development",
    output:{
        filename:"main.js",
        path:path.resolve(__dirname, "build")
    }
}


module.exports=merge(common, dev)