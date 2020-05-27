import React from 'react'
import loadable from "@loadable/component"

function Component1(){
    return (<div>123</div>)
}

let Component2Async = loadable(_ => import("./components-async"), {
    ssr: true,
    fallback: <div>loading</div>
})

function useAsyncLoad(Component, asyncWay){
    let preloadData = {}
    function y(props){
        return <Component preload={preloadData} {...props}></Component>
    }

    y.prototype.fetchData = _ => {
        return asyncWay.then(data => {
            preloadData = data
            return data
        })
    }

    // return function y(props){
    //     return <><Component preload={preloadData} {...props}></Component></>
    // }
    
    return Component
}

let Component2 = useAsyncLoad(function(props){
    let [count, setCount] = React.useState(1)
    let [loaded, setLoaded] = React.useState(false)

    console.log("aaaaa")
    setTimeout(_ => {
        setCount(100)
        setLoaded(true)
        console.log("bbbbb")
    }, 1000)
    return (
        <div>
            {count}
            <Component2Async>

            </Component2Async>
        </div>
    )
}, _ => {
    return new Promise(resolve => {
        setTimeout(_ => {
            resolve({
                count: 100
            })
        }, 1000)
    })
})

export {
    Component1,
    Component2,
}