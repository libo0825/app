import React, { Component } from 'react';
import {withRouter,Redirect} from 'react-router-dom'
const NewC=(props)=>{
    console.log(props)
    return(
      <div>路由对应的组件</div>
    )
}
const NewD=withRouter(NewC)
class Ccc extends Component {
	constructor(props){
		super(props)
    console.log(this.props)
    this.state={
        name:'libo'
    }
	}
  render() {
    return (
      <div>
          <input type='text' value={this.state.name} onChange={(e)=>{
            this.setState({
              name:e.target.value
            })
          }}/> 
          <p>{this.state.name}</p>
          <NewD />
          <Redirect to='/bbb' /> 
      </div>
    );
  }
}

export default Ccc;
