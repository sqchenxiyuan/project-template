const path = require("path")
const MiniCssExtractPlugin = require("mini-css-extract-plugin")

module.exports = {
    context: path.resolve(__dirname, "../"),
    entry: {
        "app": "./src/index.ts"
    },
    output: {
        path: path.resolve(__dirname, "../dist"),
        publicPath: "/public/",
        filename: "[name].[chunkhash:6].[contenthash:6].js",
        chunkFilename: "[name].[chunkhash:6].[contenthash:6].chunk.js",
        library: "exampleLibrary",
        libraryTarget: 'umd'
    },
    resolve: {
        extensions: [".ts", ".js"]
    },
    module: {
        rules: [
            {   
                test: /\.tsx?$/, 
                loader: "ts-loader" 
            },
            {
                test: /\.js$/,
                loader: "babel-loader?cacheDirectory=true",
                exclude: /node_modules/
            },
            {
                test: /\.css$/,
                use: [{
                    loader: MiniCssExtractPlugin.loader,
                }, {
                    loader: "css-loader"
                }, {
                    loader: "postcss-loader"
                }]
            },
            {
                test: /\.scss$/,
                use: [{
                    loader: MiniCssExtractPlugin.loader,
                }, {
                    loader: "css-loader" // 编译CSS到CommonJS
                }, {
                    loader: "postcss-loader" // 编译CSS
                }, {
                    loader: "sass-loader", // 编译SCSS到CSS
                    options: {
                        implementation: require("sass")
                    }
                }]
            },
        ]
    },
    plugins: [
        new MiniCssExtractPlugin({
            // Options similar to the same options in webpackOptions.output
            // both options are optional
            filename: "css/[name].[chunkhash:6].[contenthash:6].css",
            chunkFilename: "css/[id].[chunkhash:6].[contenthash:6].css"
        })
    ]
}