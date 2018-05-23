import React, { Component } from 'react';
import {createStore,combineReducers} from 'redux'

const add='ADD_TODO'
const toduList1=(state=[
    {text:'列表文字1'},
    {text:'列表文字2'},
    {text:'列表文字3'},
  ],action)=>{
    switch(action.type){
      case add:
        return state.concat({
          text:action.text
        })
        break;
      default:{
          return state
      }
    }
}
const toduList2=(state=[
    {text:'列表文字1'},
    {text:'列表文字2'},
    {text:'列表文字3'},
  ],action)=>{
    switch(action.type){
      case add:
        return state.concat({
          text:action.text
        })
        break;
      default:{
          return state
      }
    }
}
const toduList=combineReducers({toduList1,toduList2})
const store=createStore(toduList)
store.subscribe(()=>{
  console.log(store.getState())
})
store.dispatch({
  type:add,
  text:'新加的文字1'
})
setTimeout(()=>{
  store.dispatch({
    type:add,
    text:'新加的文字2'
  })
},3000)
class Redux2 extends Component {
  constructor(props){
    super(props)
    
  }
  render() {
    let data=store.getState().toduList1
    console.log(data)
    return (
      <div>
          redux2基础组件
      </div>
    );
  }
}

export default Redux2;
