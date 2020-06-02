import React from 'react'
import ReactSSR from 'react-dom/server'
import { useState, useContext } from 'react'

let endData
try {
    endData = window.__SSR_CONTENT_CACHE__ || null
} catch {
    endData = {}
}

const SSRContext = React.createContext(() => {})
const SSRContextCache = React.createContext({
    loading: {},
    end: endData,
})

function serverBuild(App){
    const waiting = []
    const SSRContext = createSSRContext()
    
    const Jsx = (
        <SSRContext.Provider value={promise => waiting.push(promise)}>
            {App}
        </SSRContext.Provider>
    )

    ReactSSR.renderToString(Jsx)

    return Promise.all(waiting).then(_ => {
        return {
            app: Jsx, 
            getCacheScript: SSRContext.getCacheScript
        }
    })
}

function createSSRContext(){
    let loading = {}
    let end = {}

    function Provider(props){
        return (
            <SSRContext.Provider value={props.value}>
                <SSRContextCache.Provider value={{loading, end}}>
                    {props.children}
                </SSRContextCache.Provider>
            </SSRContext.Provider>
        )
    }

    function getCacheScript(){
        return `<script>window.__SSR_CONTENT_CACHE__=${JSON.stringify(end)};</script>`
    }

    return {
        Provider,
        getCacheScript
    }

}

function useSSRLoad(key, loadFun, def){
    let srrLoad = useContext(SSRContext)
    let {loading, end} = useContext(SSRContextCache)
    let [data, setData] = useState(end[key] || def)
    
    if(loading[key] == undefined && end[key] == undefined){
        loading[key] = loadFun().then(res => {
            setData(res)
            end[key] = res
            return res
        })
        srrLoad(loading[key])
    }
    return data
}


export {
    SSRContext,
    useSSRLoad,
    createSSRContext,
    serverBuild
}