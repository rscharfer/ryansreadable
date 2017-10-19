import React, { Component } from 'react'
import { connect } from 'react-redux'
import { showPopulatedCommentForm, openPostForm, populatePostForm } from '../../actions'



const Edit = (props) =>{





	function fillForm(){

		
		if(!props.comment) props.populatePostForm(props.meta)
		if(props.comment){
			
			props.showPopulatedCommentForm(props.meta)
			
		} 
		

	}

	

	

     return (<li><a onClick={this.fillForm}><span className="icon is-small"><i className="fa fa-edit"></i></span><span>Edit</span></a></li>)

	


}

//submitEditedCommentToStore
//submitEditedCommentToServer

function mapDispatchToProps(dispatch){

	return {
		showPopulatedCommentForm:(comment)=>{
			dispatch(showPopulatedCommentForm(comment));
		},

		openPostForm:()=>{
			dispatch(openPostForm())
		},

		populatePostForm:(post)=>{
			dispatch(populatePostForm(post))
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


