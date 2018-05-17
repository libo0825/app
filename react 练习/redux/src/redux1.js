import React, { Component } from 'react';
import {createStore} from 'redux'
//创建reducer 初始化state对象{count：0}，接受action
//内部通过action.type来操作，返回新的state
const counter=(state={
	count:0
},action)=>{
	switch(action.type){
		case 'ADD' :
			return state={
				count:state.count += 1
			};
		case 'REMOVE' :
			return state={
				count:state.count -= 1
			};
		default:
			return state
	}
}
//创建store 使用store作为变量，值是使用createStore接收reducer生成
const store = createStore(counter)//如果有多个reducer，可以使用const counter=combineReducers({reducer1,reducer2})来合并
//store提供了getState（）方法用来获取state，提供了dispatch方法执行reducer
//action 指的是一个描述对象 通过type字段描述事实
store.dispatch({
	type:'ADD'
})
//执行reducer的时候必须传递action
store.dispatch({
	type:'ADD'
})
console.log(store.getState())
class Redux1 extends Component {
  constructor(props){
    super(props)
  }
  render() {
    return (
      <div>
      		redux1基础组件
      </div>
    );
  }
}

export default Redux1;
