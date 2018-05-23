import React, { Component } from 'react';
import {connect} from 'react-redux';
import axios from 'axios'

class Me extends Component {
	constructor(a){
		super(a)
		this.state={
			count:0,
			price:0,
			flag:false
		}
	}
	componentDidMount(){
		axios.get('/api/list').then((res)=>{
			
			this.props.datalist(res.data)
		})

	}
	add(index){
		if(this.props.data[index].flag){
			this.setState({
				count:this.state.count+1,
				price:this.state.price+=this.props.data[index].price*1
			})
		}
		
		this.props.add(index)
	}
	jian(index){
		
		if(this.refs['ipt'+index].value>0){
			this.setState({
				count:this.state.count-1,
				price:this.state.price-=this.props.data[index].price*1
			})
		}
		
		this.props.jian(index)
	}
	flag(){
		this.setState({
				flag:!this.state.flag
				
		})
		if(this.state.flag){
			this.setState({
				count:0,
				price:0
			})
			this.props.buxuan(this.props.data)
		}else{
			let count=0,
				price=0;
			this.props.data.forEach((a,b)=>{
				count+=a.count;
				price+=a.price*a.count
			})
			this.setState({
				count:count,
				price:price
			})
			this.props.quanxuan(this.props.data)
		}
		
	}
	danji(data,index){
		this.props.danji(this.props.data,index)
		
			let count=0,
				price=0;
				this.props.data.forEach((a,b)=>{
					if(a.flag){
						count+=a.count;
						price+=a.price*a.count
					}
				})
			this.setState({
					count:count,
					price:price
				})
		
		
	}
	render(){
		let {count,price}=this.state
		return(
			<div>
				{
					this.props.data.map((item,index)=>{
						return (
							<div key={index}>
								<div className='aa'>
									<div className="ff">
										<input type="checkbox" ref={'danji'+index} onClick={()=>{this.danji(this.props.data,index)}} className="f1" defaultChecked={this.state.flag} checked={item.flag}/>
									</div>
									<div className="bb">{item.title}</div>
									<div className="cc">
										<img src={item.src} alt="" />
									</div>
									<div  className="dd">{item.price}</div>
									<div className="ee">
										<button className="e1" onClick={()=>{this.jian(index)}}>-</button>
										<input type="text" ref={'ipt'+index} className="e3" value={item.count}/>
										<button className="e2" onClick={()=>{this.add(index)}}>+</button>
									</div>
								</div>	
								
							</div>
						)
					})
				}
				<div className='foot'>
					<input type="checkbox" className="f2" defaultChecked={this.state.flag} onClick={()=>{this.flag()}}/>
					<div className='d1'>
					总数量：<span>{count}</span>
					</div>
					<div className='d1'>
					总价：<span>{price}</span>
					</div>
				</div>
			</div>
		)
	}
}
const fn1=(state)=>{
	return {
		data:state.Me
	}
}
const fn2=(dispatch)=>{
	return{
		datalist:(data)=>{
			dispatch({
				type:'DATA',
				data
			})
		},
		add:(index)=>{

			dispatch({
				type:'ADD',
				ind:index
				
			})
		},
		jian:(index)=>{
			dispatch({
				type:'JIAN',
				ind:index
			})
		},
		quanxuan:(data)=>{
			dispatch({
				type:'QUANXUAN',
				data
			})
		},
		buxuan:(data)=>{
			dispatch({
				type:'BUXUAN',
				data
			})
		},
		danji:(data,index)=>{
			dispatch({
				type:'DANJI',
				data,
				ind:index
			})
		}

	}

}
export default connect(fn1,fn2)(Me)
