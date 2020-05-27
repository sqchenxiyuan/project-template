import React from "react"
import ReactDom from "react-dom"
import App from "./app"
import { StaticRouter } from 'react-router-dom'
import StyleContext from 'isomorphic-style-loader/StyleContext'
import { ChunkExtractor } from '@loadable/server'
import ReactSSR from 'react-dom/server'

export function appRender(options){
    let {
        statsFile
    } = options

    return function(req, res){
        const css = new Set() 
        const insertCss = (...styles) => styles.forEach(style => css.add(style._getCss()))
        const app = (
            <StyleContext.Provider value={{ insertCss }}>
                <StaticRouter location={req.url}>
                    <App />
                </StaticRouter>
            </StyleContext.Provider>
        );

        const extractor = new ChunkExtractor({ statsFile, entrypoints: ["app"] })
        const jsx = extractor.collectChunks(app)
        const appString = ReactSSR.renderToString(jsx);

        const scriptTags = extractor.getScriptTags() // or extractor.getScriptElements();
        // You can also collect your "preload/prefetch" links
        const linkTags = extractor.getLinkTags() // or extractor.getLinkElements();
        // And you can even collect your style tags (if you use "mini-css-extract-plugin")
        const styleTags = extractor.getStyleTags() // or extractor.getStyleElements();
        console.log(scriptTags)

        console.log("end")
        res.send(`<html><head></head><body><style>${[...css].join(" ")}</style><div id="app">${appString}</div>${scriptTags}</body></html>`)
    }

}