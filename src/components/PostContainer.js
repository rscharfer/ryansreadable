import React, { Component } from 'react';
import { Route } from 'react-router-dom';
import SimplePost from './SimplePost.js';

class PostContainer extends Component {

	constructor(props){
		super(props);
		this.state = {
		posts: [], }

	}

	


	componentDidMount(){

		console.log(`http://localhost:3001/${this.props.cat?'/'+this.props.cat:''}/posts`)
		const posts = fetch(`http://localhost:3001${this.props.cat?'/'+this.props.cat:''}/posts`,{headers:{authorization:'crazypassword'}})
					  .then(res=>res.json(),err=>console.log(`There was an error`,err))
					  .then(data=>this.setState({posts:data}),err=>console.log(`There was another error`,err))
	}


	render(){
		return (
				<div>
				{this.state.posts.map((post)=>{
					console.log(post);
					return <SimplePost key={post.id} openWindow={this.props.openWindow} meta={post}/>
				})}
				</div>
			)
	} 
		
}







export default PostContainer