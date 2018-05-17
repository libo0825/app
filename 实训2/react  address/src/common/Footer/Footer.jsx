import React, { Component } from "react"
import "./Footer.css"

class Footer extends Component {
    render() {
        const { children } = this.props
        return (
            <div id="Footer">
                {children}
            </div>
        )
    }
}

export default Footer