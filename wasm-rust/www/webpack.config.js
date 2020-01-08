const HtmlWebpackPlugin = require("html-webpack-plugin");
const WasmPackPlugin = require("@wasm-tool/wasm-pack-plugin");
const path = require('path');

module.exports = {
  entry: "./index.js",
  mode: "development",
  output: {
    path: path.resolve(__dirname, "dist"),
    filename: "index.js",
  },
  plugins: [
    new HtmlWebpackPlugin({
        name: 'index',
        filename: 'index.html',
        template: './index.html',
        inject: true,
        title: 'web-react'
    }),
    new WasmPackPlugin({
        crateDirectory: path.resolve(__dirname, ".."),
    })
  ],
  devServer: {
    host: "0.0.0.0",
    port: 8080
  }
};
