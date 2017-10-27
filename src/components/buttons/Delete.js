import React from 'react'
import {connect} from 'react-redux';
import { deletePost, deleteComment, removePostfromStore, removeCommentfromStore } from '../../actions'


const Delete = (props) =>{

	
	
	const deleteEntity = (id, category) => {
		
		
		
		if(props.posts.includes(id)){

			
			props.removePostFromStore(id,category);
			props.removePostFromServer(id);

		}

		else {
			
			props.removeCommentFromServer(id);
			props.removeCommentFromStore(id);
		}

	}

	

		
	return (<li><a onClick={(e)=>{
		e.preventDefault();
		deleteEntity(props.meta.id, props.meta.category)	
	}}><span className="icon is-small"><i className="fa fa-close"></i></span><span>Delete</span></a></li>)


}

const mapStateToProps = (state) => {


  
  const posts = state.postsByCategory.react.concat(state.postsByCategory.redux).concat(state.postsByCategory.udacity);
  
  
  return {
    posts

  }
}


const mapDispatchToProps = dispatch => {

  return {
    removePostFromStore : (id,category) =>dispatch(removePostfromStore(id,category)),
    removePostFromServer : (id) => dispatch(deletePost(id)),
    removeCommentFromServer : (id) => dispatch(deleteComment(id)),
    removeCommentFromStore : (id) => dispatch(removeCommentfromStore(id)),
  }
}




export default connect(
  mapStateToProps,
  mapDispatchToProps
)(Delete)