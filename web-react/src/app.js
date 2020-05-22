import React from 'react'
import styled from 'styled-components'
import { Route, BrowserRouter as Router, Link } from 'react-router-dom'

const Div = styled.div`
    color:red;
`

class App extends React.Component {
    render () {
        return (
            <Router>
                <Link to={'/'}>/</Link>
                <Link to={'/a'}>/a</Link>
                <Route path='/' exact>
                    <Div>Hello! Here is webpack+react+bable-for-web  demo!</Div>
                </Route>
                <Route
                    path='/:id'
                    render={
                        props => <Div>{props.match.params.id}</Div>
                    }
                />
            </Router>
        )
    }
}

export default App
