import React, { Component } from 'react'


class Delete extends Component{

	constructor(props){
		super();
		this.deleteFromServer = this.deleteFromServer.bind(this)
		this.state = {
			IDOfParent : props.postID || props.commentID,
			containerPosts: props.cp
		}
		
	}

	deleteFromServer(e){
		e.preventDefault();
		const url = 'http://localhost:3001/posts/'+ this.state.IDOfParent;
		const headers = {authorization:'crazypassword'}
		fetch(url,{headers:headers,method:'DELETE'})
		// const postToDelete = this.state.containerPosts.filter(post=>post.id===this.state.IDOfParent)[0];
		// console.log(postToDelete)
		this.props.updateContainer(this.state.IDOfParent);
		

		

	
	}

	render(){

	
		return (<li><a onClick={this.deleteFromServer}><span className="icon is-small"><i className="fa fa-close"></i></span><span>Delete</span></a></li>)


	}


}



export default Delete