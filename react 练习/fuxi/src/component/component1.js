import React, { Component } from 'react';

class Component1 extends Component {
  constructor(props){
      super(props)
      this.state={
      	value:''
      }
  }
 componentDidMount(){
 	console.log(this.refs.name)
 	console.log(this.refs.age)
 	
 }
  render() {
  	
    return (
      <div>
        <p><button  onClick={()=>{this.props.fn1()}}>-</button>{this.props.name} <button  onClick={()=>{this.props.fn2()}}>+</button></p>
        <div ref='name'>123</div> 
        <div ref={(e)=>{
        	this.refs.age=e
        }}>456</div> 
        <input type='text' onChange={(e)=>{
        	this.setState({
        		value:e.target.value
        	})
        }}/>
        <input type='text' value={this.state.value} ref='cll'/>
      </div>
    );
  }
}
export default Component1;
