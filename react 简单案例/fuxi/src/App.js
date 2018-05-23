import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import Component1 from './component/component1'
class App extends Component {
  
  constructor(props){
      super(props)
      this.state={
        name:1
      }
  }

  render() {
    let {name}=this.state
    return (
      <div className="App">
        <Component1 name={name} fn1={()=>{
          this.setState({
            name:this.state.name-1
          })
        }}  fn2={()=>{
          this.setState({
            name:this.state.name+1
          })
        }} >
        </Component1>
      </div>
    );
  }
}

export default App;
