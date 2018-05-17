import React, { Component } from 'react';

class ziji extends Component {
	constructor(props){
		super(props)
	}
  render() {
    return (
      <div className="ziji">
          {this.props.children}
      </div>
    );
  }
}

export default ziji;
