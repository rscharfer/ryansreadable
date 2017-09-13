import React, { Component } from 'react'


class Edit extends Component{

	// props include the meta data for the post being edited and the showPopulatedForm

	constructor(props){
		super();
		this.state={
			id:''
		}
		this.fillForm = this.fillForm.bind(this)
		
		
	}

	fillForm(){
		console.log('here are teh props',this.props)
		this.props.showPopulatedForm(this.props.meta)
		if(this.props.comment) this.props.changeEditId(this.props.meta.id)
		

	}

	render(){

	

     return (<li><a onClick={this.fillForm}><span className="icon is-small"><i className="fa fa-edit"></i></span><span>Edit</span></a></li>)

	}


}



export default Edit


