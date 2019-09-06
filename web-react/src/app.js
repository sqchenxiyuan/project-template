import React from 'react'
import styled from 'styled-components'

const Div = styled.div`
    color:red;
`

class App extends React.Component {
    render () {
        return (
            <Div>Hello! Here is webpack+react+bable-for-web  demo!</Div>
        )
    }
}

export default App
