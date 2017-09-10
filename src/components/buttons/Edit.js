import React, { Component } from 'react'


class Edit extends Component{

	constructor(props){
		super();
		this.fillForm = this.fillForm.bind(this)
		this.state = {
			IDOfParent : props.postID || props.commentID
		}
		
	}

	fillForm(){
		this.props.openWindow(this.state.IDOfParent)
	}

	render(){

	

     return (<li><a onClick={this.fillForm}><span className="icon is-small"><i className="fa fa-edit"></i></span><span>Edit</span></a></li>)

	}


}



export default Edit


