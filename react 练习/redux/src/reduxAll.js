import React, { Component } from 'react';
import {connect} from 'react-redux'
import {createStore,combineReducers} from 'redux'
import Redux3 from './component/redux3'
import Redux4 from './component/redux4'
import Redux5 from './component/redux5'
class ReduxAll extends Component {
  constructor(props){
    super(props)
  }
  render() {
  	console.log(this.props)
  	const list=this.props.list
  	const add=this.props.add
  	const actions=this.props.actions
  	const setfilter=this.props.setfilter
    return (
          <div>
              <Redux4 
              		onAdd={add}
              		

              		/>
              <Redux3 
              		data={list}
              		onactions={actions}

              />
              <Redux5 
              		onfilter={setfilter}
              />
          </div>
    );
  }
}

export default connect((state)=>{
	console.log(state)
	//获取state数据
	return {
		list:state.list,
		aaa:'aaa',
		filterStr:state.filterStr
	}
},(dispatch)=>{
	//获取dispatch
	return {
		add(text){
			dispatch({
				type:'ADD',
				text:text
			})
		},
		actions(index){
			dispatch({
				type:'ACTIONS',
				actions:index
			})
		},
		setfilter(filter){
			dispatch({
				type:'SET_FILTER',
				filter:filter
			})
		}
	}
})(ReduxAll);