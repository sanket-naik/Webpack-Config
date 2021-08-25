const path = require('path');
const common= require('./webpack.common')
const { merge } = require('webpack-merge');
const { CleanWebpackPlugin } = require('clean-webpack-plugin');
const MiniCssExtractPlugin = require('mini-css-extract-plugin');
const CssMinimizerPlugin = require('css-minimizer-webpack-plugin');
const HtmlWebpackPlugin = require('html-webpack-plugin');

let prod={
    mode:"production",
    output:{
        filename:"[name].[contenthash].bundle.js",
        path:path.resolve(__dirname, "build")
    },
    plugins:[
       
    ],
    optimization:{
            minimizer:[
                `...`,
                new CssMinimizerPlugin(),
                new HtmlWebpackPlugin({
                    template:'./src/index.html',
                    minify:{
                        removeComments:true,
                        collapseWhitespace:true,
                        removeAttributeQuotes:true
                    }
                })
            ]
    },
    plugins:[
        new CleanWebpackPlugin(),
        new MiniCssExtractPlugin({filename:'[name].[contenthash].css'})
    ],
    module:{
        rules:[
            {
                test:/\.scss$/,
                use:[
                    // extract css into files
                    MiniCssExtractPlugin.loader,
                    // Translates CSS into CommonJS
                    "css-loader",
                    // Compiles Sass to CSS
                    "sass-loader"
                ]
            },
        ]
    }
}



module.exports=merge(common, prod)