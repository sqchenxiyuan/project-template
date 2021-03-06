const ReactRefreshWebpackPlugin = require('@pmmmwh/react-refresh-webpack-plugin');
const HtmlWebpackPlugin = require('html-webpack-plugin')
const webpack = require('webpack')
const { merge } = require('webpack-merge')

const webpackBaseConfig = require('./webpack.config.base')

module.exports = merge(webpackBaseConfig, {
    mode: 'development',
    devtool: 'eval-source-map',
    output: {
        filename: '[name].js',
        chunkFilename: '[name].chunk.js'
    },
    plugins: [
        new webpack.HotModuleReplacementPlugin(),
        new ReactRefreshWebpackPlugin(),
        new HtmlWebpackPlugin({
            name: 'index',
            filename: 'index.html',
            template: './index.template.html',
            inject: true,
            title: 'web-react'
        })
    ],
    devServer: {
        historyApiFallback: {
            rewrites: [
                { from: /.*/, to: '/public/index.html' }
            ]
        },
        stats: 'normal',
        host: '0.0.0.0',
        port: 8080,
        hot: true
    }
})
