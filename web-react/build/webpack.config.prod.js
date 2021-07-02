const HtmlWebpackPlugin = require('html-webpack-plugin')
const { merge } = require('webpack-merge')

const webpackBaseConfig = require('./webpack.config.base')

module.exports = merge(webpackBaseConfig, {
    mode: 'production',
    devtool: 'source-map',
    plugins: [
        new HtmlWebpackPlugin({
            name: 'index',
            filename: 'index.ejs',
            template: './index.template.html',
            inject: true,
            title: 'web-react'
        })
    ]
})
