import React, { useState } from 'react'
import loadable from "@loadable/component"
import { SSRContext, useSSRLoad } from "./ssr-context"

function Component1(){
    return (<div>123</div>)
}

let Component2Async = loadable(_ => import("./components-async"), {
    ssr: true,
    fallback: <div>loading</div>
})

let Component2 = function(props){
    const SSRLoad = useSSRLoad("xx", () => {
        return new Promise(resolve => {
            setTimeout(_ => {
                resolve("biu")
            }, 1000)
        })
    },"loading")

    return (
        <div>
            {SSRLoad}
            <Component2Async>

            </Component2Async>
        </div>
    )
}

export {
    Component1,
    Component2,
}