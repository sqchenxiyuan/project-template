const webpackBaseConfig = require("./webpack.config.base.js")
const webpack = require("webpack")
const merge = require("webpack-merge")

module.exports = merge(webpackBaseConfig, {
    mode: "production",
    devtool: "source-map",
    plugins: [
        new webpack.DefinePlugin({
            'process.env.NODE_ENV': JSON.stringify("production")
        }),
    ],
})