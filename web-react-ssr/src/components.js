import React from 'react'
import loadable from "@loadable/component"

function Component1(){
    return (<div>123</div>)
}

let Component2Async = loadable(_ => import("./components-async"), {
    ssr: true,
    fallback: <div>loading</div>
})


function Component2(){
    let [count, updateCount] = React.useState(1)

    React.useEffect(_ => {
        updateCount(2)
    }, [])
    console.log("aaaaa")
    return (
        <div>
            {count}
            <Component2Async>

            </Component2Async>
        </div>
    )
}

export {
    Component1,
    Component2,
}