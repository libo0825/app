import React, { Component } from 'react';
import {createStore} from 'redux'

function filter_fn(filterStr,ArrayObj){
    if(filterStr=='SHOW'){
      ArrayObj.filter((item)=>{
        return item.active==1
      })
    }else if(filterStr=='SHOW_NO_ACTIVE'){
        ArrayObj.filter((item)=>{
          return item.active==0
      })
    }else{
          return ArrayObj
    }
}
class Redux3 extends Component {
  constructor(props){
    super(props)
  }
  render() {
    return (
      <ul>
        {
          filter_fn(this.props.filterStr,this.props.data) .map((item,index)=>{
            return (
                <li key={index} onClick={()=>{
                  this.props.onactions(index)
                }}>{item.text}{item.status}</li>
            )
          })
        }
      </ul>
    );
  }
}

export default Redux3;
