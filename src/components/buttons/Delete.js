import React, { Component } from 'react'


class Delete extends Component{

	// props include removePost to remove the post from PostContainer and meta for the meta data about the post
	constructor(props){
		super();
		this.deleteFromServer = this.deleteFromServer.bind(this)
		
		
	}

	deleteFromServer(e){
		e.preventDefault();
		const id = this.props.meta.id
		const url = 'http://localhost:3001/posts/'+ id;
		const headers = {authorization:'crazypassword'}
		fetch(url,{headers:headers,method:'DELETE'})
		this.props.removePost(id);
	}

	render(){

	
		return (<li><a onClick={this.deleteFromServer}><span className="icon is-small"><i className="fa fa-close"></i></span><span>Delete</span></a></li>)


	}


}



export default Delete