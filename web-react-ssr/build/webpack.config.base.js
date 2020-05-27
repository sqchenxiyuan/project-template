const path = require('path')
const webpack = require('webpack')
const LoadablePlugin = require('@loadable/webpack-plugin')

module.exports = {
    context: path.resolve(__dirname, '../'),
    entry: {
        app: './src/index.js',
    },
    output: {
        path: path.resolve(__dirname, '../dist'),
        publicPath: '/public/',
        filename: '[name].[chunkhash:6].[contenthash:6].js',
        chunkFilename: '[name].[chunkhash:6].[contenthash:6].chunk.js',
    },
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
                },
                    
                //     {
                //     loader: MiniCssExtractPlugin.loader
                // }, 
                {
                    loader: 'css-loader', // translates CSS into CommonJS
                    options: {
                        modules: true
                    }
                }, {
                    loader: 'postcss-loader' // translates CSS into CommonJS
                }]
            }
        ]
    },
    plugins: [
        new webpack.DefinePlugin({
            'process.env.NODE_ENV': JSON.stringify('production')
        }),
        new LoadablePlugin()
    ]
}
