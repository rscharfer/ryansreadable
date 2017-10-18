import React, { Component } from 'react'
import { connect } from 'react-redux'
import { showPopulatedCommentForm } from '../../actions'



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

		
		if(!this.props.comment) this.props.showPopulatedForm(this.props.meta)
		if(this.props.comment){
			console.log('edit was clicked and it was a comment')
			this.props.showPopulatedCommentForm(this.props.meta)
			
		} 
		

	}

	render(){

	

     return (<li><a onClick={this.fillForm}><span className="icon is-small"><i className="fa fa-edit"></i></span><span>Edit</span></a></li>)

	}


}

//submitEditedCommentToStore
//submitEditedCommentToServer

function mapDispatchToProps(dispatch){

	return {
		showPopulatedCommentForm:(comment)=>{
			dispatch(showPopulatedCommentForm(comment));
			
		}
	}
}


function mapStateToProps(state){

	return {
		commentIsBeingEdited:state.commentIsBeingEdited,
		commentWhichIsBeingEdited:state.commentWhichIsBeingEdited
	}
}

export default connect(mapStateToProps,mapDispatchToProps)(Edit)


