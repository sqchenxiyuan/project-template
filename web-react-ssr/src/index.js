import React from "react"
import ReactDom from "react-dom"
import App from "./app"
import { BrowserRouter } from 'react-router-dom'
import StyleContext from 'isomorphic-style-loader/StyleContext'

const insertCss = (...styles) => {
    console.log(styles)
  const removeCss = styles.map(style => style._insertCss())
    console.log(removeCss)

//   return () => removeCss.forEach(dispose => dispose())
}

ReactDom.render(
    <StyleContext.Provider value={{insertCss}}>
        <BrowserRouter>
            <App />
        </BrowserRouter>
    </StyleContext.Provider>,
    document.getElementById("app")
)