import React, { Component } from 'react';
import Circle from './circle';

class TraficSignal extends Component {
  constructor(props) {
    super(props);
			
  }


	
  render() {
    return (
      <div>
				
        <button  className = "button-red"
          onClick={() => {this.onInputChange()}} >
			  </button>

				 <button  className = "button-green"
          onClick={()=> {this.onInputChange()}}>
				</button>
				<Circle color = {this.props.color}/>
      </div>
    );
  }

  onInputChange() {
 				
    this.props.onColorChange();
  }
}

export default TraficSignal;
