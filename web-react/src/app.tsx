import React, { useCallback } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { Route, BrowserRouter as Router, Link } from 'react-router-dom'

import styles from "./index.css"
import { RootDispatch, RootState } from './store'

function App () {
    let dispatch = useDispatch<RootDispatch>()
    let count = useSelector<RootState>(state => state.count)

    let onClick = useCallback(function(){
        dispatch.count.increment(1)
    }, [dispatch])


    return (
        <Router>
            <Link to={'/'}>/</Link>
            <Link to={'/a'}>/a</Link>
            {count}1231123122as
            <button onClick={onClick}>+1</button>
            <Route path='/' exact>
                <div className={styles.container}>Hello! Here is webpack+react+bable-for-web  demo!</div>
            </Route>
            <Route
                path='/:id'
                render={
                    props => <div>{props.match.params.id}</div>
                }
            />
        </Router>
    )
}

export default App
