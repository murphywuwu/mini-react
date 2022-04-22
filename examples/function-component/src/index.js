import React from '@packages/react'
import ReactDOM from '@packages/react-dom'

const App = function (props) {
  return <h1>hello, {props.name}</h1>
}

const container = document.getElementById('root')
ReactDOM.render(<App name="world" />, container)
