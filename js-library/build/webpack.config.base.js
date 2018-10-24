const path = require("path")

module.exports = {
    context: path.resolve(__dirname, "../"),
    entry: {
        "app": "./src/index.js",
    },
    output: {
        path: path.resolve(__dirname, "../dist"),
        publicPath: "/public/",
        filename: "[name].js",
        chunkFilename: "[name].chunk.js",
        library: "exampleLibrary",
        libraryTarget: 'umd'
    },
    module: {
        rules: [
            {
                test: /\.js$/,
                loader: "babel-loader?cacheDirectory=true",
                exclude: /node_modules/
            },
        ]
    },
}