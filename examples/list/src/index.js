import React from 'react'
import ReactDOM from 'react-dom'

const element = (
  <ul style={{ color: 'white' }}>
    <li style={{ background: 'blue' }}>1</li>
    <li style={{ background: 'pink' }}>2</li>
    <li style={{ background: 'black' }}>3</li>
  </ul>
)

const container = document.getElementById('root')
ReactDOM.render(element, container)
