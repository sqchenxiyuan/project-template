import React from 'react'
import { Route, Link } from 'react-router-dom'
import withStyles from 'isomorphic-style-loader/withStyles'
import style from "./styles/index.css"
import { Component1, Component2 } from "./components"

class App extends React.Component {
    render () {
        return (
            <>
                <Link to={'/'}>/</Link>
                <Link to={'/a'}>/a</Link>
                <Route path='/' exact>
                    2222222
                    <div className={style.colorRed}>Hello! Here is webpack+react+bable-for-web  demo!</div>
                </Route>
                <Route
                    path='/:id'
                    render={
                        props => <div className={style.colorRed}>{props.match.params.id}</div>
                    }
                />
                <Component1></Component1>
                <Component2></Component2>
            </>
        )
    }
}

export default withStyles(style)(App)
