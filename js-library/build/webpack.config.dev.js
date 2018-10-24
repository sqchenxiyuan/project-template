const webpackBaseConfig = require("./webpack.config.base.js")
const merge = require("webpack-merge")

module.exports = merge(webpackBaseConfig, {
    mode: "development",
    devtool: "eval-source-map"
})