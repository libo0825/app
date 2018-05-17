import React, { Component } from "react"
import { connect } from "react-redux"
import "./City.css"
import axios from "axios"

class City extends Component {
    constructor() {
        super()
        this.state = {
            citys: [{ city: sessionStorage.getItem("address") }],
            topCity: ""
        }
    }
    componentDidMount() {
        axios.get("/api/city").then((data) => {
            this.props.getData(data.data)
            for (let key in this.refs) {
                if (key == this.state.citys[0].city) {
                    this.state.citys[0].dom = this.refs[key]
                }
            }
            this.state.citys.forEach((v, i) => {
                v.dom.className = "active"
            })
            this.setState({ topCity: sessionStorage.getItem("topCity") })
        })
    }
    click(e) {
        if (e.target.className != 'active') {
            e.target.className = "active"
            this.setState([...this.state.citys.push({ city: e.target.innerHTML, dom: e.target })])
        }
        else {
            if (this.state.citys.length != 1) {
                this.state.citys.forEach((val, ind) => {
                    if (val.city == e.target.innerHTML) {
                        this.setState([...this.state.citys.splice(ind, 1)])
                        val.dom.className = ""
                    }
                })
            }
        }

    }
    del(e) {
        if (this.state.citys.length != 1) {
            this.state.citys.forEach((val, ind) => {
                if (val.city == e.target.innerHTML) {
                    this.setState([...this.state.citys.splice(ind, 1)])
                    val.dom.className = ""
                }
            })
        }
    }
    go() {
        this.props.history.push("/TopCity")
    }
    goBack() {
        sessionStorage.address = this.state.citys[0].city
        this.props.history.push("/")
    }
    render() {
        let { citys, topCity } = this.state
        return (
            <div className="City">
                <div className="head">
                    <a onClick={this.goBack.bind(this)}> ＜ </a> | <span>选择城市</span>
                    <button onClick={this.go.bind(this)}>上牌城市选择 ></button>
                </div >

                <div className="title">
                    <span>您选择的上牌城市是:</span><b>{topCity}</b>
                </div>

                <div className="CityTop">
                    <h2>您已选择城市：</h2>
                    <ul>
                        {
                            citys.map((v, i) => {
                                return <li key={i} onClick={(e) => { this.del(e) }}>{v.city}</li>
                            })
                        }
                    </ul>
                </div>

                <div className="CityBox">
                    {
                        this.props.data.map((v, i) => {
                            return <div key={i}>
                                <h3>{v.letter}</h3>
                                <ul>
                                    {v.citys.map((val, ind) => {
                                        return <li key={ind} ref={val} onClick={(e) => { this.click(e) }}>{val}</li>
                                    })}
                                </ul>
                            </div>
                        })
                    }

                </div>
            </div>
        )
    }
}

const state = (state) => {
    return {
        data: state.city
    }
}

const action = (dispatch) => {
    return {
        getData: (data) => {
            dispatch({
                type: "getData",
                data: data
            })
        }
    }
}


export default connect(state, action)(City)