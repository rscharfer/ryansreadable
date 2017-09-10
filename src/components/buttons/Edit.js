import React, { Component } from 'react'


class Edit extends Component{

	// props include the meta data for the post being edited and the showPopulatedForm

	constructor(props){
		super();
		this.fillForm = this.fillForm.bind(this)
		
		
	}

	fillForm(){
		
		this.props.showPopulatedForm(this.props.meta)
		

	}

	render(){

	

     return (<li><a onClick={this.fillForm}><span className="icon is-small"><i className="fa fa-edit"></i></span><span>Edit</span></a></li>)

	}


}



export default Edit


