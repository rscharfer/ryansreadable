import React from 'react'
import {connect} from 'react-redux';
import { deletePost, deleteComment } from '../../actions'


const Delete = (props) =>{

	
	
	const deleteEntity = id => {
		
		
		
		if(props.posts.includes(id)){

			
			props.removePostFromStore(id);
			props.removePostFromServer(id);

		}

		else {
			
			props.removeCommentFromServer(id);
			props.removeCommentFromStore(id);
		}
		// const url = this.props.comment? 'http://localhost:3001/comments/'+ id : 'http://localhost:3001/posts/'+ id;

		// const headers = {authorization:'crazypassword'}
		// fetch(url,{headers:headers,method:'DELETE'})
		// if(this.props.removeComment) this.props.comment? this.props.removeComment(id): this.props.removePost(id);
		
	}

	

		
	return (<li><a onClick={(e)=>{
		e.preventDefault();
		deleteEntity(props.meta.id)	
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
    removePostFromStore : (id) =>dispatch({
      type : 'REMOVE_POST_FROM_STORE',
      id
    }),
    removePostFromServer : (id) => dispatch(deletePost(id)),
    removeCommentFromServer : (id) => dispatch(deleteComment(id)),
    removeCommentFromStore : (id) => dispatch({
      type : 'REMOVE_COMMENT_FROM_STORE',
      id
    }),
    

  }
}




export default connect(
  mapStateToProps,
  mapDispatchToProps
)(Delete)