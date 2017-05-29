import React, { Component } from 'react';
class Circle extends Component {

	
    render() {
		console.log("circle",this.props.color);
  let background = {
			
			background: this.props.color
		}
        return (
						<div  className = "circle-light" style = {background}>
						</div>
        );
    }
}
export default Circle;




