import React from "react"
import ReactDom from "react-dom"
import App from "./app"
import { BrowserRouter } from 'react-router-dom'
import StyleContext from 'isomorphic-style-loader/StyleContext'
import { loadableReady } from "@loadable/component"

const insertCss = (...styles) => {
  const removeCss = styles.map(style => style._insertCss())
  return () => removeCss.forEach(dispose => dispose())
}

loadableReady(_ => {
    ReactDom.hydrate(
        <StyleContext.Provider value={{insertCss}}>
            <BrowserRouter>
                <App />
            </BrowserRouter>
        </StyleContext.Provider>,
        document.getElementById("app")
    )
})