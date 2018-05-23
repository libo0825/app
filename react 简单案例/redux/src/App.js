import React, { Component } from 'react';
import './App.css'
//import Redux1 from './redux1'
//import Redux2 from './redux2'
import ReduxAll from './reduxAll'

import {Provider} from 'react-redux'
import store from './todu'
console.log(store.getState())
class App extends Component {
  constructor(props){
    super(props)
  }
  render() {
    return (
      <Provider store={store}>
          <div className="App">
              {/*<Redux1 />
                            <Redux2 />*/}
              <ReduxAll />
          </div>
      </Provider>
    );
  }
}

export default App;
