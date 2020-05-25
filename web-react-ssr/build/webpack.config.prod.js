const webpackBaseConfig = require('./webpack.config.base.js')
const HtmlWebpackPlugin = require('html-webpack-plugin')
const merge = require('webpack-merge')

module.exports = merge(webpackBaseConfig, {
    mode: 'production',
    devtool: 'source-map',
    plugins: [
        new HtmlWebpackPlugin({
            name: 'index',
            filename: 'index.html',
            template: './index.template.html',
            inject: true,
            title: 'web-react'
        })
    ]
})
