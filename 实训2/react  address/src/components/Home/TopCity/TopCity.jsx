import React, { Component } from "react"
import "./TopCity.css"
import axios from "axios"
import { connect } from "react-redux"

class TopCity extends Component {
    constructor() {
        super()
        this.state = {
            left: [],
            right: [],
            citys: [],
            city: "",
            english: "A",
            topCity: '',
            topArr: []
        }
    }
    componentDidMount() {
        axios.get("/api/topCity").then((data) => {
            this.props.getData(data.data)

            this.setState({ left: this.props.data[0] })
            this.setState({ right: this.props.data[1] })
            this.setState({ city: this.state.left[0].province[0] })

            let arr = []
            this.state.right.forEach((v, i) => {
                v.forEach((val, ind) => {
                    if (val.province == this.state.city) {
                        arr.push(val.name)
                    }
                })
            })
            this.setState({ citys: arr })

            for (let key in this.refs) {
                if (key == this.state.city) {
                    this.refs[key].className = "active"
                }
                if (key == this.state.english) {
                    this.refs[key].className = "active"
                }
            }

            let topArr = []
            let left = document.getElementsByClassName("TopCityLeft")[0].getElementsByTagName("h3")
            Object.values(left).forEach((v, i) => {
                topArr.push(v.offsetTop)
            })
            this.setState({ topArr: topArr })
        })
    }
    click(e, english) {
        let right = document.getElementsByClassName("TopCityRight")[0].getElementsByTagName("li")
        Object.values(right).forEach((v, i) => {
            v.className = ""
        })

        this.state.topCity = ""

        for (let key in this.refs) {
            this.refs[key].className = ""

        }
        e.target.className = "active"

        this.state.city = e.target.innerHTML
        this.state.english = english

        for (let key in this.refs) {
            if (key == this.state.english) {
                this.refs[key].className = "active"
            }
        }

        let arr = []
        this.state.right.forEach((v, i) => {
            v.forEach((val, ind) => {
                if (val.province == this.state.city) {
                    arr.push(val.name)
                }
            })
        })
        this.setState({ citys: arr })
    }
    change(e) {
        this.setState({ topCity: e.target.innerHTML })

        let lis = e.target.parentNode.childNodes
        lis.forEach((v, i) => {
            v.className = ""
        })

        e.target.className = "active"
    }
    english(e) {
        let lis = e.target.parentNode.childNodes
        lis.forEach((v, i) => {
            v.className = ""
        })

        e.target.className = "active"

        let left = document.getElementsByClassName("TopCityLeft")[0]
        let top = left.offsetTop

        let arr = []
        this.state.left.forEach((v, i) => {
            arr.push(v.letter)
        })
        arr.forEach((v, i) => {
            if (v == e.target.innerHTML) {
                left.scrollTo(0, this.state.topArr[i] - top)
            }
        })
    }
    goBack() {
        sessionStorage.topCity = this.state.topCity
        this.props.history.push("/city")
    }
    render() {
        let { left, right, citys, topCity } = this.state
        return (
            <div className="TopCity">
                <div className="head">
                    <a onClick={this.goBack.bind(this)}>＜</a> | <span>选择上牌城市</span>
                </div>

                <div className="title">
                    <span>您选择的上牌城市是:</span><b>{topCity}</b>
                </div>

                <div className="TopCityBox">
                    <div className="TopCityLeft">
                        {
                            left.map((v, i) => {
                                return <div key={i}>
                                    <h3>{v.letter}</h3>
                                    <ul>
                                        {
                                            v.province.map((val, ind) => {
                                                return <li key={ind} ref={val} onClick={(e) => { this.click(e, v.letter) }}>{val}</li>
                                            })
                                        }
                                    </ul>
                                </div>
                            })
                        }
                    </div >

                    <div className="TopCityRight">
                        <ul>
                            {
                                citys.map((v, i) => {
                                    return <li key={i} onClick={(e) => { this.change(e) }}>{v}</li>
                                })
                            }
                        </ul>
                    </div >

                    <div className="TopCityEn">
                        <ul>
                            {
                                left.map((v, i) => {
                                    return <li key={i} ref={v.letter} onClick={(e) => { this.english(e) }}>{v.letter}</li>
                                })
                            }
                        </ul>
                    </div>
                </div >
            </div >
        )
    }
}

const state = (state) => {
    return {
        data: state.topCity
    }
}

const action = (dispatch) => {
    return {
        getData: (data) => {
            dispatch({
                type: "getData1",
                data: data
            })
        }
    }
}


export default connect(state, action)(TopCity)