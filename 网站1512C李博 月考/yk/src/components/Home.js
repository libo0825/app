import React, { Component } from 'react';
import {
    BrowserRouter as Router,
    Route,
    Link, 
    Switch
} from 'react-router-dom'
import {connect} from 'react-redux'
import axios from 'axios'
class Home extends Component {
	constructor(props){
		super(props)
		this.state={
			con:''
		}
	}
	componentDidMount(){
		axios.get('/list2').then((resolve)=>{
			//console.log(resolve.data[0].list1)
			this.props.reqData(resolve.data)
		},(err)=>{
			console.log(err)
		})
	}
	
	quanbu(){
		this.props.data.forEach((v,i)=>{
			this.refs['aa'+i].style.display='none'
		})
		this.refs.bb.style.display='none'
		this.refs.zz.style.display='block'
		axios.get('/list3').then((resolve)=>{
			
			this.props.reqData(resolve.data)
		},(err)=>{
			console.log(err)
		})
	}
	fanhui(){
		window.location.href='http://localhost:3000'
	}
	dianji(ind){
		//console.log(ind)
		let str=''
		this.props.data[ind].list.forEach((a,b)=>{
			str+=`<div>${a.title}</div>`
		})
		this.setState({
			con:str
		})
		/*console.log(this.refs.zz.childNodes[1].childNodes[1])
		console.log(this.state.con)*/
	}
	render(){
		let {con}=this.state
		return(
			<div className='box1' >
				{
					this.props.data.map((item,index)=>{
						return(
							<div key={index} className='aa' ref={'aa'+index}>
								<div className='bb'>
									<span>
										<img src={item.img} />
									</span>
									<span>{item.name}</span>
								</div>
								
							</div>
						)
					})
				}
				<div className='aa'  ref='bb'>
					<div className='bb'>
						<span>
							<img src='./img/1.jpg' />
						</span>
							<Router>
								<div>
						 		<Link to='/all' onClick={()=>{this.quanbu()}}>全部</Link>
						 		</div>
							</Router>
							
					</div>
								
				</div>
				<div className='zz' ref='zz'>
					<div className='top'>
						<p onClick={()=>{this.fanhui()}}>←返回</p>
					</div>
					<div className='bot'>
						<div className='left'>
							{
								this.props.data.map((v,i)=>{
									return (
										<div key={i}>
											<div onClick={()=>{this.dianji(i)}}>{v.name}</div>
										</div>
									)
								})
							}
						</div>
						<div className='right' refs='right'>
							{con}
						</div>
					</div>
					
				</div>
			</div>
		)
	}
}
const fn1=(state)=>{
	return{
		data:state.Home
	}
	
}
const fn2=(dispatch)=>{
	return {
		reqData:(data)=>{
			dispatch({
				type:'DATA1',
				data
			})
		}
	}
	
}
export default connect(fn1,fn2)(Home)