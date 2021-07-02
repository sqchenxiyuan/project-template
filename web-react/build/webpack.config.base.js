const path = require('path')

const MiniCssExtractPlugin = require('mini-css-extract-plugin')
const webpack = require('webpack')

const isDevelopment = process.env.NODE_ENV !== 'production';

module.exports = {
    target: "web",
    context: path.resolve(__dirname, '../'),
    entry: {
        app: './src/index'
    },
    output: {
        path: path.resolve(__dirname, '../dist'),
        publicPath: '/public/',
        filename: '[name].[chunkhash:6].[contenthash:6].js',
        chunkFilename: '[name].[chunkhash:6].[contenthash:6].chunk.js'
    },
    module: {
        rules: [
            {
                test: /\.(t|j)s$/,
                loader: 'babel-loader',
                options: {
                    cacheDirectory: true,
                    plugins: [
                        isDevelopment && require.resolve('react-refresh/babel'),
                    ].filter(Boolean),
                },
                exclude: /node_modules/
            },
            {
                test: /\.(t|j)sx$/,
                loader: 'babel-loader',
                options: {
                    cacheDirectory: true,
                },
                exclude: /node_modules/
            },
            {
                test: /\.css$/,
                use: [{
                    loader: MiniCssExtractPlugin.loader
                }, {
                    loader: "css-modules-typescript-loader"
                }, {
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
            'process.env.NODE_ENV': JSON.stringify(process.env.NODE_ENV || 'production')
        }),
        new MiniCssExtractPlugin({
            // Options similar to the same options in webpackOptions.output
            // both options are optional
            filename: 'css/[name].[chunkhash:6].[contenthash:6].css',
            chunkFilename: 'css/[id].[chunkhash:6].[contenthash:6].css'
        })
    ],
    resolve: {
        extensions: [".ts", ".js", ".tsx", ".jsx"]
    }
}
