import React, { Component } from 'react';
import Circle from './circle';

class TraficSignal extends Component {
  constructor(props) {
    super(props);
			
		this.state = { color: this.props.color };
		
  }


	
  render() {
		console.log("tf ",this.state.color);
    return (
      <div>
				
        <button  className = "button-red"
          onClick={() => {this.onInputChange('red'); this.setState({color : 'red'});}} >
			  </button>

				 <button  className = "button-green"
          onClick={()=> {this.onInputChange('green'); this.setState({color : 'green'});}}>
				</button>
				<Circle color = {this.state.color}/>
      </div>
    );
  }

  onInputChange(term) {
 				
    this.props.onColorChange();
  }
}
export default TraficSignal;
