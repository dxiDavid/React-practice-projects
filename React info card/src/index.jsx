import React from 'react'
import ReactDOM from 'react-dom/client'
import Nav from './components/nav'
import Body from "./components/body"
import './style.css'

ReactDOM.createRoot(document.getElementById('root')).render(
    <div className="container">
        <Nav />
        <Body />
    </div>
)
