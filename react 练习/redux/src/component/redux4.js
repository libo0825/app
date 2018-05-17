import React, { Component } from 'react';
import {createStore} from 'redux'

class Redux4 extends Component {
  constructor(props){
    super(props)
  }
  render() {
    return (
      <div>
          <input type='text' onKeyUp={(e)=>{
              if(e.keyCode==13){
                  console.log('tianjian',e.target.value)
                  this.props.onAdd(e.target.value)
                  e.target.value=''
              }
          }}/>
      </div>
    );
  }
}

export default Redux4;
