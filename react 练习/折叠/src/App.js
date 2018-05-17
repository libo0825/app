import React, { Component } from 'react';
import Fuji from './fuji'
import Ziji from './ziji'
class App extends Component {
  render() {
    return (
      <div className="App">
          <Fuji>
            <Ziji title='标题1'>
              <div>啊啊啊啊啊啊啊啊啊啊啊啊啊</div>
              <div>啦啦啦啦啦啦啦啦</div>
            </Ziji>
            <Ziji title='标题2'>
              <div>啊啊啊啊啊啊啊啊啊啊啊啊啊</div>
              <div>啦啦啦啦啦啦啦啦</div>
            </Ziji>
            <Ziji title='标题3'>
              <div>啊啊啊啊啊啊啊啊啊啊啊啊啊</div>
              <div>啦啦啦啦啦啦啦啦</div>
            </Ziji>
            <Ziji title='标题4'>
              <div>啊啊啊啊啊啊啊啊啊啊啊啊啊</div>
              <div>啦啦啦啦啦啦啦啦</div>
            </Ziji>
          </Fuji>
      </div>
    );
  }
}

export default App;
