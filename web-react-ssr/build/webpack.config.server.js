const path = require('path')
const webpack = require('webpack')
const ManifestPlugin = require('webpack-manifest-plugin');
const LoadablePlugin = require('@loadable/webpack-plugin')

module.exports = {
    mode: "production",
    context: path.resolve(__dirname, '../'),
    entry: {
        'app-server': './src/server-app.js'
    },
    output: {
        path: path.resolve(__dirname, '../dist'),
        publicPath: '/public/',
        filename: '[name].[chunkhash:6].[contenthash:6].js',
        chunkFilename: '[name].[chunkhash:6].[contenthash:6].chunk.js',
        libraryTarget: "commonjs",
    },
    target: 'node',
    module: {
        rules: [
            {
                test: /\.js$/,
                loader: 'babel-loader?cacheDirectory=true',
                exclude: /node_modules/
            },
            {
                test: /\.jsx$/,
                loader: 'babel-loader?cacheDirectory=true',
                exclude: /node_modules/
            },
            {
                test: /\.css$/,
                use: [{
                    loader: "isomorphic-style-loader",
                },{
                    loader: 'css-loader', // translates CSS into CommonJS
                    options: {
                        modules: true
                    }
                }, {
                    loader: 'postcss-loader'
                }]
            }
        ]
    },
    plugins: [
        new webpack.DefinePlugin({
            'process.env.NODE_ENV': JSON.stringify('production')
        }),
        new ManifestPlugin({
            basePath: "",
            fileName: "server-ssr-manifest.json",
            publicPath: "./"
        }),
        new LoadablePlugin()
    ],
    
}
