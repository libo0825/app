import React, { Component } from 'react';
import { connect } from "react-redux"
import axios from "axios"
class Pp extends Component {
	constructor(props){
		super(props)
	}
	componentDidMount(){
		axios.get("/api/car").then((data) => {
            this.props.getData(data.data)
           
        })
	}
	car(e){
		this.props.history.push('/fl/carlist')
		let val=e.target.innerHTML
		sessionStorage.setItem("car",val)
		console.log(this.props)
	}
	render(){
		return(
			<div className='pp'>
				{
					this.props.data.map((v,i)=>{
						return <div key={i}>
								
									{
										v.map((a,b)=>{
											return <div key={b} className='carClass' onClick={(e)=>{this.car(e)}}>
														{a.carClass}

													</div>
										})
									}
								
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


export default connect(state, action)(Pp)