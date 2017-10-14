import React, { Component } from 'react'
import {connect} from 'react-redux';


class Delete extends Component{

	// props include removePost to remove the post from PostContainer and meta for the meta data about the post
	constructor(props){
		super();
		this.delete = this.delete.bind(this)
		
		
	}

	delete(id){
		
		
		
		if(this.props.posts.includes(id)){

			console.log(`a post with the id of ${id} should be deleted.`)
			this.props.removePostFromStore(id);
			this.props.removePostFromServer(id);

		}

		else {
			console.log(`a comment with the id of ${id} should be deleted.`)
			this.props.removeCommentFromServer(id);
			this.props.removeCommentFromStore(id);
		}
		// const url = this.props.comment? 'http://localhost:3001/comments/'+ id : 'http://localhost:3001/posts/'+ id;

		// const headers = {authorization:'crazypassword'}
		// fetch(url,{headers:headers,method:'DELETE'})
		// if(this.props.removeComment) this.props.comment? this.props.removeComment(id): this.props.removePost(id);
		
	}

	render(){

		
		return (<li><a onClick={(e)=>e.preventDefault(),this.delete(this.props.meta.id)}><span className="icon is-small"><i className="fa fa-close"></i></span><span>Delete</span></a></li>)


	}


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
    removePostFromServer : (id) => dispatch({
      type : 'REMOVE_POST_FROM_SERVER',
      id
    }),
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