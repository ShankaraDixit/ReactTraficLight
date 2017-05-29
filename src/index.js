import _ from 'lodash';
import React, { Component } from 'react';
import ReactDOM from 'react-dom';
import TraficSignal from './components/traficSignal';
import Circle from './components/circle';

class App extends Component {
  


	constructor(props) {
    super(props);

    this.state = {
      color:'red' 
    };
		this.timer();
  }

	switchOn = (term)=> {
	  console.log("term" , term);
    this.setState({ color: term },() => {
			this.timer();
		});
		
		
  }
	timer =()=>
	{
		
		if(this.state.color == 'red'){
			//term = 'green';
       this.setState({color : 'green'});	
		}else{
			//term = 'red';
				this.setState({color : 'red'});	
		}
		//let term = this.state.color;
		console.log(this.state.color);
		setTimeout(()=>this.timer(), 5000);
		
	}
	render() {
		console.log("in index",this.state.color);
	// const switchOn1 = setTimeout(this.switchOn(() => { this.timer() }), 5000);
    return (
      <div>
        <TraficSignal onColorChange = {this.timer} color = {this.state.color}/>
      </div>
    );
  }
}

ReactDOM.render(<App />, document.querySelector('.container'));


/*setTimeout(this.switchOn((term)=>{
		
		
		return this.state.color;
		}), 5000);*/
