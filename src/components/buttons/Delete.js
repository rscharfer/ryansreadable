import React from 'react'
import {connect} from 'react-redux';
import { deletePost } from '../../actions'


const Delete = (props) =>{

	
	
	const deleteEntity = id => {
		
		
		
		if(props.posts.includes(id)){

			console.log(`a post with the id of ${id} should be deleted.`)
			props.removePostFromStore(id);
			props.removePostFromServer(id);

		}

		else {
			console.log(`a comment with the id of ${id} should be deleted.`)
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
    removeCommentFromStore : (id) => dispatch({
      type : 'REMOVE_COMMENT_FROM_STORE',
      id
    }),
    removeCommentFromServer : (id) => dispatch({
      type : 'REMOVE_COMMENT_FROM_SERVER',
      id
    }),

  }
}




export default connect(
  mapStateToProps,
  mapDispatchToProps
)(Delete)