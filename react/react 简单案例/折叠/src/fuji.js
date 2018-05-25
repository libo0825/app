import React, { Component } from 'react';

class fuji extends Component {
	constructor(props){
		super(props)
		this.state={
			flag:true
		}
	}
	showFn(index){
		let con=this.refs['ziji'+index]
         	let isShow=con.style.display;
         	if(isShow=='none'){
         		con.style.display='block'
         	}else{
         		con.style.display='none'
         	}
	}
  render() {
  	let items = this.props.children
  	console.log(items)
    return (
      <div className="fuji">
         {
         	items.map((item,index)=>{
         		return (
         			<div key={index}>
         				<h2 onClick={()=>{
         					this.showFn(index)
         				}}>{item.props.title}</h2>
         				<div ref={'ziji'+index} style={{display:'none'}}>
         					{item}
         				</div>
         			</div>
         		)
         	})
         }
      </div>
    );
  }
}

export default fuji;
