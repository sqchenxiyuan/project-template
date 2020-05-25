import React from "react"
import ReactDom from "react-dom"
import App from "./app"
import { StaticRouter } from 'react-router-dom'
import StyleContext from 'isomorphic-style-loader/StyleContext'

export function app(url, insertCss){
    return (
        <StyleContext.Provider value={{ insertCss }}>
            <StaticRouter location={url} context={{}}>
                <App />
            </StaticRouter>
        </StyleContext.Provider>
    )
}