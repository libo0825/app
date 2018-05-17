import React, { Component } from 'react';
import './App.css';
import {
    BrowserRouter as Router,
    Route,
    Link, 
    Switch
} from 'react-router-dom'
import mock from './mock'
import {Provider} from 'react-redux'
import Home from './components/Home'
import Shopcar from './components/Shopcar'
import Me from './components/Me'
import store from './store'
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
                  <Route exact={true} path='/shopcar' component={Shopcar} />
                  <Route exact={true} path='/me' component={Me} />
                </Switch>
              </div>
              <div className='footer'>
                <Link to='/' >首页</Link>
                <Link to='/shopcar' >购物车</Link>
                <Link to='/me' >我的</Link>
              </div>
              
            </div>
          </Router>
        </div>
      </Provider>
    );
  }
}

export default App;
