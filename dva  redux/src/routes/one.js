import React from 'react';
import { connect } from 'dva';
import styles from './one.css';

class One extends React.Component {
 
  add(){
   
    this.props.dispatch({
          type:'one/fetch',
          flg:'+',
          num:1
        })
  }
  cut(){
    this.props.dispatch({
      type:'one/fetch',
      flg:'-',
      num:1
    })
  }
 
  render(){
    return (
      <div className={styles.normal}>
            <button onClick={()=>{
                this.cut()
              }}>-</button>
            <span>{this.props.data.num}</span>
            <button onClick={()=>{
                this.add()
              }}>+</button>
      </div>
  );
  }
  
}

function mapStateToProps(state) {
  return {
    data:state.one
  };
}

export default connect(mapStateToProps)(One);
