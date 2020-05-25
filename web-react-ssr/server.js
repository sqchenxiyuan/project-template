const express = require('express');                //node方式引入expeess
const ReactSSR = require('react-dom/server');      //node方式引入react-dom/serve
const ssrApp = require('./dist/app-server.b98365.f76dc0.js');
const app=express();

 app.get('*',function (req,res) {
    const css = new Set() 
    const insertCss = (...styles) => styles.forEach(style => css.add(style._getCss()))
    const appString = ReactSSR.renderToString(ssrApp.app(req.url), insertCss);
    res.send(`<html><body><style>${[...css].join(" ")}</style>${appString}</body></html>`)
});
        
app.listen(3000,function () {         //监听端口，成功函数
    console.log('server is listening')
})