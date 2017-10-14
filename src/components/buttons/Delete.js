import React, { Component } from 'react'
import {connect} from 'react-redux';


class Delete extends Component{

	// props include removePost to remove the post from PostContainer and meta for the meta data about the post
	constructor(props){
		super();
		this.deleteFromServer = this.deleteFromServer.bind(this)
		
		
	}

	deleteFromServer(e){
		

		e.preventDefault();
		const id = this.props.meta.id
		// const url = this.props.comment? 'http://localhost:3001/comments/'+ id : 'http://localhost:3001/posts/'+ id;

		// const headers = {authorization:'crazypassword'}
		// fetch(url,{headers:headers,method:'DELETE'})
		// if(this.props.removeComment) this.props.comment? this.props.removeComment(id): this.props.removePost(id);
		
	}

	render(){

		
		return (<li><a onClick={()=>this.props.removePost(this.props.meta.id)}><span className="icon is-small"><i className="fa fa-close"></i></span><span>Delete</span></a></li>)


	}


}

// const mapStateToProps = (state) => {
  
//   const posts = state.postsByCategory.react.items.concat(state.postsByCategory.redux.items).concat(state.postsByCategory.udacity.items);
//   const comments = [];
  
//   return {
//     posts,
//     comments

//   }
// }


// const mapDispatchToProps = dispatch => {
//   return {
//     removePostFromStore : (id) => dispatch({
//       type : 'REMOVE_POST_FROM_STORE',
//       id
//     })
//   }
// }




export default Delete