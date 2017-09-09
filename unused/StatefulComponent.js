import React, { Component } from 'react';


class StatefulComponent extends Component {


	state = {

		showButton:true
	}



		
	handleClick = ()=>{

		const state = this.state;
		if(state.showButton) this.setState({showButton:false})
		else this.setState({showButton:true})
	}
	


	render(){

		return (

			<div>
				<a href="#changed" onClick={this.handleClick}>Toggle Second Button</a>
				{this.state.showButton && <button>Awesome Button</button>}
			</div>	



			)
	}
	
}








export default StatefulComponent