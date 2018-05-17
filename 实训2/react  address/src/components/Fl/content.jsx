import React, { Component } from 'react';
class Content extends Component {
	constructor(props){
		super(props)
	}
	
	fn1(){
		
		this.props.history.push({pathname:'/fl/px1'})
	}
	fn2(){
		
		this.props.history.push({pathname:'/fl/px2'})
	}
	render(){
		return(
			<div className='content'>
				<div onClick={()=>{this.fn1()}}>价格从低到高</div>
				<div onClick={()=>{this.fn2()}}>价格从高到低</div>
			</div>
		)
	}
}


export default Content