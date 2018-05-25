import React, { Component } from 'react';
import axios from 'axios'

class Px2 extends Component {
	constructor(props){
		super(props)
		this.state={
			list:[]
		}
	}
	componentDidMount(){
		let arr=[]
		axios.get("/api/car").then((data) => {
            data.data.forEach((v,i)=>{
				
				v.forEach((a,b)=>{
					a.carList.forEach((c,d)=>{
						if(c.price){
							c.price.split('-')[0]
							
							arr.push(c)
						
						}
					})
				})
				arr.sort((a,b)=>{
					return b.price.split('-')[0]-a.price.split('-')[0]
				})
				
			})

           	this.setState({
			 	list:arr
			}) 
        })

	}
	render(){
		return(
			<div className='car'>
				{
					this.state.list.map((a,b)=>{
							return <div key={b} className='carName'>
										{a.price!=''?<div><h2>{a.carName}</h2><p>{a.price}</p></div>:''}
											</div>

				})
										
														
									
								
								
				}
			</div>
		)
	}
}



export default Px2