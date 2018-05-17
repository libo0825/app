import React from "react"
import ReactDom from "react-dom"
import { BrowserRouter, Route, NavLink, Switch, hasHistory } from "react-router-dom"

import App from "./App.jsx"

import "./icon/iconfont.css"
import "./main.css"

import mock from './mock'
mock()

import { Provider } from 'react-redux'
import store from './store'

ReactDom.render(
    <Provider store={store}>
        <BrowserRouter>
            <App />
        </BrowserRouter>
    </Provider>,
    document.getElementById("root")
)