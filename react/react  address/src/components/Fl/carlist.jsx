import React, { Component } from 'react';
import { connect } from "react-redux"
import axios from "axios"
class Carlist extends Component {
	constructor(props){
		super(props)
		this.state={
			list:[]
		}
	}
	componentDidMount(){
		let car=sessionStorage.getItem('car')
		axios.get("/api/car").then((data) => {
            this.props.getData(data.data)
            this.props.data.forEach((v,i)=>{
            	v.forEach((a,b)=>{
            		if(car==a.carClass){
            			this.setState({
            				list:a.carList
            			})
            		}
            	})
            })
        })
	}
	render(){
		return(
			<div className='carlist'>
				{
					this.state.list.map((a,b)=>{
						return <div key={b}>
									{a.carName!=''?<h3 className='aaa'>{a.carName}</h3>:''}
									
								</div>
					})
				}
			</div>
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


export default connect(state, action)(Carlist)