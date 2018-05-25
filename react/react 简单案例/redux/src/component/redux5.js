import React, { Component } from 'react';

class Redux5 extends Component {
  constructor(props){
    super(props)
  }
  render() {
    return (
      <div>
         <button onClick={()=>{
            this.props.onfilter('SHOW_ALL')
         }}>显示全部</button>
         <button onClick={()=>{
            this.props.onfilter('SHOW_ACTIVE')
         }}>显示已完成</button>
         <button onClick={()=>{
            this.props.onfilter('SHOW_NO_ACTIVE')
         }}>显示未完成</button>
      </div>
    );
  }
}

export default Redux5;
