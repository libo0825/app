import React, { Component } from 'react';
import Aaa from './aaa.js'
import Bbb from './bbb.js'
import Ccc from './ccc.js'
import './App.css'
import {
    BrowserRouter as Router,
    Route,
    Link,
    Switch
} from 'react-router-dom'
class App extends Component {
  render() {
    return (
      <div className="App">
         
          <Router basename='/anli'>

            <div>
              <div className='nav'>
                  <Link to='/aaa' replace>1</Link>
                  <Link to='/bbb' replace>2</Link>
                  <Link to='/ccc/libo' replace>3</Link>
              </div>
              
              <div>
                <Switch>
                  <Route exact={true} path='/aaa' component={Aaa}></Route>
                  <Route exact={true} path='/bbb' component={Bbb}></Route>
                  <Route exact={true} path='/ccc/libo' component={Ccc}></Route>
                    2
                  <Route exact={true} path='/ccc/:name' component={Ccc}></Route>
                </Switch> 
              </div>
            </div>
            
          </Router>

      </div>
    );
  }
}

export default App;
