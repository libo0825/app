import React, { Component } from 'react';
import { connect } from "react-redux"
import axios from "axios"
class Car extends Component {
	constructor(props){
		super(props)
	}
	componentDidMount(){
		  axios.get("/api/car").then((data) => {
            this.props.getData(data.data)
            
        })
	}
	render(){
		return(
			<div className='car'>
				{
					this.props.data.map((v,i)=>{
						return <div key={i}>
								
									{
										v.map((a,b)=>{
											return <div key={b}>
														
														
															{
																a.carList.map((c,d)=>{
																	return <div key={d} className='carName'>
																				{c.price!=''?<div><h2>{c.carName}</h2><p>{c.price}</p></div>:''}
																			</div>

																})
															}
														
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


export default connect(state, action)(Car)