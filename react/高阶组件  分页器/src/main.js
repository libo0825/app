import React from "react"
import ReactDom from "react-dom"

import Home from './components/home'

import "./css/main.css"

ReactDom.render(
    <div>
        <Home/>
    </div>, document.getElementById("root"))