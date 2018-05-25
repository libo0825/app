import React, { Component } from 'react';
import Hoc from './hoc'
class List extends Component {
	constructor(props){
		super(props)
	}
	render(){
		return(
			<div className='aaa'>
				{
					this.props.data.map((v,i)=>{
					return <p key={i}>{v}</p>
				})}
			</div>
		)
    }
}
export default Hoc(List)