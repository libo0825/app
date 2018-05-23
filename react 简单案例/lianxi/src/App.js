import React, { Component } from 'react';

import {
    BrowserRouter as Router,  //history路由配置，hash路由配置HashRouter
    Route,  //配置路由，path对应路由地址， component对应路由渲染的组件
    Link,   //做跳转用的组件   和 vue中router-link
    Switch
} from 'react-router-dom'   //react路由配置需要引入的包
import {Provider} from 'react-redux'
import store from './store'

import mock from './mock'
import Home from './components/Home'
import Car from './components/Car'
import Mine from './components/Mine'
import Me from './components/Me'
import './App.css'
//console.log(store)
class App extends Component {
  render() {
    return (
      <Provider store={store}>
        <div className="App">
          <Router>
            <div>
              <div>
                <Switch>
                  <Route exact={true} path='/' component={Home} />
                  <Route path='/mine' component={Mine} />
                  <Route path='/car' component={Car} />
                  <Route path='/me' component={Me} />
                </Switch>
              </div>
              <div className='footer'>
                <Link to='/' >首页</Link>
                <Link to='/mine' >个人</Link>
                <Link to='/car' >购物车</Link>
                <Link to='/me' >我</Link>
              </div>
              
            </div>
          </Router>
        </div>
      </Provider>
    );
  }
}

export default App;
