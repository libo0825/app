import React, { Component } from "react"
import "./Fl.css"
import { BrowserRouter, Route, NavLink, Redirect,Switch } from "react-router-dom"
import { connect } from "react-redux"
import axios from "axios"
import Car from './car'
import Carlist from './carlist'
import Pp from './pp'
import Px1 from './px1'
import Px2 from './px2'
import Content from './content'
class Fl extends Component {
    constructor() {
        super()
        this.state = {
            px:false,
            pp:false,
            jg:false,
            sx:false
        }
    }
    goBack() {
        sessionStorage.address = this.state.citys[0].city
        this.props.history.push("/")
    }
    changepx(){
        
        this.setState({
            px:!this.state.px,
            pp:false,
            jg:false,
            sx:false
        })

    }
    changePp(){
        this.setState({
            px:false, 
            pp:!this.state.pp,
            jg:false,
            sx:false
        })
    }
    changejg(){
        this.setState({
            px:false, 
            pp:false,
            jg:!this.state.jg,
            sx:false
        })
    }
    changesx(){
        this.setState({
            px:false, 
            pp:false,
            jg:false,
            sx:!this.state.sx
        })
    }
    render() {
        let address = window.sessionStorage.getItem("address")
        return (
            <BrowserRouter>
                <div id="Fl">
            

                    <div className="head">
                        <NavLink to='/city'><span>{address}  ▼  </span></NavLink> | <input type="text" placeholder="请输入搜索内容" />
                    </div>
                    <div className='nav'>
        
                            <NavLink to={this.state.px?'/fl/car':'/fl/content'}  onClick={()=>{this.changepx()}}>排序<span>{this.state.px?'▲':'▼'}</span></NavLink>
                            <NavLink to={this.state.pp?'/fl/car':'/fl/pp'}  onClick={()=>{this.changePp()}}>品牌<span>{this.state.pp?'▲':'▼'}</span></NavLink>
                            <NavLink to={this.state.jg?'/fl/px2':'/fl/px1'}  onClick={()=>{this.changejg()}}>价格<span>{this.state.jg?'▲':'▼'}</span></NavLink>
                            <NavLink to={this.state.sx?'/fl/car':'/fl/pp'}  onClick={()=>{this.changesx()}}>筛选<span>{this.state.sx?'▲':'▼'}</span></NavLink>
                         
                    </div>
                     <Switch>

                        <Route exact path='/fl/car' component={Car} className='car'></Route> 
                        <Route exact path='/fl/content' component={Content} ></Route>  
                        <Route exact path='/fl/carlist' component={Carlist} ></Route>   
                        <Route exact path='/fl/px1' component={Px1} ></Route>   
                        <Route exact path='/fl/px2' component={Px2} ></Route>   
                        <Route exact path='/fl/pp' component={Pp} ></Route>   
                        <Redirect to="/fl/car"/>
                    </Switch>
                </div>
            </BrowserRouter>
        )
    }
}
const state = (state) => {
    return {
        data: state.car
    }
}

const action = (dispatch) => {
    return {
        getData: (data) => {
            dispatch({
                type: "getData2",
                data: data
            })
        }
    }
}


export default connect(state, action)(Fl)