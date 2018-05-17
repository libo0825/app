import React, { Component } from 'react';

import {connect} from 'react-redux'
import axios from 'axios'
class Shopcar extends Component {
	constructor(props){
		super(props)
		this.state={
			count:0,
			price:0
		}
	}
	componentDidMount(){
		axios.get('/list').then((resolve)=>{
			this.props.datalist(resolve.data)
		},(err)=>{
			console.log(err)
		})
	}
	
	add(ind){
		let n=0,p=0;
		this.props.add(this.props.data,ind)
		this.props.data.forEach((v,i)=>{
			n+=v.count;
			p+=v.count*v.price
		})
		this.setState({
			count:n,
			price:p
		})
	}
	jian(ind){
		let n=0,p=0;
		this.props.jian(this.props.data,ind)
		this.props.data.forEach((v,i)=>{
			n+=v.count;
			p+=v.count*v.price
		})
		this.setState({
			count:n,
			price:p
		})
	}
	render(){
		let {count,price}=this.state;

		return(
			<div>
				{
					this.props.data.map((item,index)=>{
						return(
							<div className='box' key={index}>
								<div className='check'>
									<input type='checkbox' defaultChecked='true'/>
								</div>
								<div className='img'>
									<img src={item.img}/>
								</div>
								<div className='text'>
									<p>{item.title}</p>
								</div>
								<div className='price'>
									<p>{item.price}<span>元</span></p>
								</div>
								<div className='btn'>
									<button onClick={()=>{this.jian(index)}}>-</button>
									<input type='text' value={item.count}/>
									<button onClick={()=>{this.add(index)}}>+</button>
								</div>
							</div>
						)
					})
				}
				<div className='foot'>
					<div className='a'><input type='checkbox' defaultChecked='true'/></div>
					<div className='b'>
						<span>总价：</span><span>{price}元</span>
					</div>
					
					<div className='c'>
						<p>去结算（{count}）</p>
					</div>
					
				</div>
			</div>
		)
	}
}
const fn1=(state)=>{
	return{
		data:state.Shopcar
	}
	
}
const fn2=(dispatch)=>{
	return {
		datalist:(data)=>{
			dispatch({
				type:'DATA',
				data
			})
		},
		add:(data,ind)=>{
			dispatch({
				type:'ADD',
				ind:ind,
				data
			})
		},
		jian:(data,ind)=>{
			dispatch({
				type:'JIAN',
				ind:ind,
				data
			})
		}
	}
	
}
export default connect(fn1,fn2)(Shopcar)