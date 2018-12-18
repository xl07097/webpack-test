const merge = require('webpack-merge')
const path = require('path')
const CopyWebpackPlugin = require('copy-webpack-plugin')
const baseConfig = require("./webpack.base.config")

module.exports = merge(baseConfig, {
    mode: 'development',
    devtool: 'source-map',
    output:{
        path: path.resolve(__dirname, '../dist'),
        filename: '[name].[hash].js',
        publicPath:'/'
        // assetsSubDirectory: 'static',
        // assetsPublicPath: '/',
    },
    devServer: {
        contentBase: '../dist',
        open: true,
        hot: true,
        port: '9820'
    },
    module:{
        rules:[
            {
                test: /\.css$/,
                use: ['style-loader', 'css-loader', 'postcss-loader']
            },
            {
                test: /.less$/,
                use: ['style-loader', 'css-loader', 'less-loader', 'postcss-loader']
            }
        ]
    },
    plugins: [
        new CopyWebpackPlugin([{
            from: path.resolve(__dirname, '../public/static'),
            to: 'static',
            ignore: ['.*']
        }])
    ]
})
