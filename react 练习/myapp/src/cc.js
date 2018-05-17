import React, { Component } from 'react';
import PropTypes from 'prop-types'
import './cc.css'

class Circle extends Component {
    constructor(props){
        super(props)
        this.state={
            width:400,
            height:400
        }
    }
  render() {
    console.log(this.props.children)
    return (
        <div className='box'>
           <canvas
           ref='canvas'
            width={this.state.width}
            height={this.state.height}
           ></canvas>
           <div className='text'>
                {this.props.children}
           </div>
        </div>
    );
  }
  initCircle(){
        this.canvas=this.refs.canvas,
        this.ctx=this.canvas.getContext('2d');
  }
  createCircle(){
        this.ctx.beginPath();
        this.ctx.lineWidth=20;
        this.ctx.strokeStyle='#ccc'
        this.ctx.arc(
            this.state.width/2,
            this.state.height/2,
            180,
            0,
            (360/180)*Math.PI,
            false
        );
        this.ctx.stroke()
  }
  createNewCircle(){
        this.ctx.beginPath();
        this.ctx.lineWidth=20;
        this.ctx.lineCap='round';
        this.ctx.strokeStyle=this.props.circleColor
        this.ctx.arc(
            this.state.width/2,
            this.state.height/2,
            180,
            (270/180)*Math.PI,
            ((270+360*this.props.num/this.props.count)/180)*Math.PI,
            false
        );
        this.ctx.stroke()
  }
  componentDidMount(){
    this.initCircle();
    this.createCircle()
    this.createNewCircle()
  }
}
Circle.defalutProps = {
    circleColor: "#0f0",
    num: 750,
    count: 1000
}
Circle.propTypes={
    children:PropTypes.element.isRequired,
    circleColor:PropTypes.string,
    num:PropTypes.number,
    count:PropTypes.number
}
export default Circle;
