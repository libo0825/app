import React, { Component } from 'react';
import './App.css';

class App extends Component {
  constructor(props){
    super(props)
    this.state={
        zan:false
    }
  }
  /*click(e,aa){
    console.log(this,aa)
  }*/
  click(aa,e){
    console.log(this,aa)
    console.log(e)//e代表组件实例  要放在最后
    this.setState({
      zan:!this.state.zan,
      flag:false
    })
  }
  slideDown(){
    this.setState({
      flag:!this.state.flag
    })
  }
  render() {
    return (
      <div className="App">
          {/*<button onClick={(e)=>{this.click(e,'哈哈')}}>React</button>*/}
          {this.state.zan ? '显示了' : '隐藏了'}
          <button onClick={this.click.bind(this,'haha')}>React</button>
          <ul>
              <li>
                  <h2 onClick={()=>{this.slideDown()}}>一级</h2>
                  <ul style={
                    {display:(this.state.flag?'block':'none')}
                  }>
                      <li>二级</li>
                      <li>二级</li>
                      <li>二级</li>
                  </ul>
              </li>
          </ul>
      </div>
    );
  }
}

export default App;
