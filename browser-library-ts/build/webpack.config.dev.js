const webpackBaseConfig = require("./webpack.config.base.js")
const HtmlWebpackPlugin = require("html-webpack-plugin")
const webpack = require("webpack")
const { merge } = require("webpack-merge")

module.exports = merge(webpackBaseConfig, {
    mode: "development",
    devtool: "eval-source-map",
    entry: {
        "example": "./example/example.ts"
    },
    output: {
        filename: "[name].js",
        chunkFilename: "[name].chunk.js",
    },
    plugins: [
        new webpack.HotModuleReplacementPlugin(),
        new HtmlWebpackPlugin({
            name: "index",
            filename: "index.html",
            template: "./example/index.html",
            inject: true,
            title: "Hello World"
        }),
    ],
    devServer: {
        historyApiFallback: {
            rewrites: [
                { from: /.*/, to: "/public/index.html" },
            ],
        },
        stats: "normal",
        host: "0.0.0.0",
        port: 8080,
        hot: true
    }
})