import React, { Component } from 'react';
import Circle from './cc'

class App extends Component {
    constructor(props){
        super(props)
        this.state={
            
        }
    }
  render() {
    return (
        <div>
           <Circle
                circleColor='#f00'
                count={1000}
                num={500}
           >
                <div>
                    <output>1000</output>
                    <span>用户注册已经完成</span>
                </div>
           </Circle>
           <Circle
                circleColor='#0f0'
                count={1000}
                num={300}
           >
                <div>
                    <output>2000</output>
                    <span>用户注册已经完成</span>
                </div>
           </Circle>
           <Circle
                circleColor='#00f'
                count={1000}
                num={750}
           >
                <div>
                    <output>800</output>
                    <span>用户注册已经完成</span>
                </div>
           </Circle>
        </div>
      
    );
  }
}

export default App;
