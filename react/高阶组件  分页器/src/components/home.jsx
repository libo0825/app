import React, { Component } from 'react';
import List from './list'

class Home extends Component {
	constructor(props){
		super(props)
		let arr=[]
		for(var i=1;i<=100;i++){
			arr.push(i)
		}
		this.state={
			arr:arr
		}
	}
	render(){
		let {arr}=this.state
		return(
			<div className='box'>
                <List data={arr}></List>
            </div>
		)
	}
}
export default Home