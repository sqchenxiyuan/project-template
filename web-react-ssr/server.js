const express = require('express')
const path = require('path')
const ssrApp = require(path.resolve(__dirname, './dist', require('./dist/server-ssr-manifest.json')['app-server.js']))

const app=express()

app.use('/public', express.static(path.resolve(__dirname, './dist')))
app.get('/',ssrApp.appRender({
    statsFile: path.resolve(__dirname, './dist/loadable-stats.json')
}));
        
app.listen(3000,function () {
    console.log('server is listening')
})