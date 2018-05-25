import React, { Component } from "react"
import { BrowserRouter, Route, NavLink, Redirect } from "react-router-dom"
import "./Home.css"

class Home extends Component {
    render() {
        let address = window.sessionStorage.getItem("address")
        return (
            <div id="Home">
                <div className="head">
                    <NavLink to='/city'><span>{address}  ▼  </span></NavLink> | <input type="text" placeholder="请输入搜索内容" />
                </div>
            </div>
        )
    }
}

export default Home