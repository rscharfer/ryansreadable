import React, { Component } from 'react';
import { Route } from 'react-router-dom';
import SimplePost from './SimplePost.js';

class PostContainer extends Component {

	constructor(props){
		super(props);
		
		this.state = { posts: [] }
		this.updateContainer = this.updateContainer.bind(this)

	}

	
    updateContainer(id){
    	
    	this.setState(
    		(prevState,props)=>{
    			return {posts:prevState.posts.filter(post=>post.id!==id)}
    		}
		)
    
    }

	componentDidMount(){

		const posts = fetch(`http://localhost:3001${this.props.cat?'/'+this.props.cat:''}/posts`,{headers:{authorization:'crazypassword'}})
					  .then(res=>{
					  	
					  	return res.json()
					  })
					  .then(data=>{
					  	console.log(this.state.posts)
					  	this.setState({posts:data.filter(post=>!post.deleted)})
					  	console.log(this.state.posts)
					  })
					  
	}


	render(){

		return (
				<div>
				{this.state.posts.filter(post=>!post.deleted).map((post)=>{
					
					return <SimplePost key={post.id} updateContainer={this.updateContainer} showPopulatedForm={this.props.showPopulatedForm} meta={post}/>
				})}
				</div>
			)
	} 
		
}







export default PostContainer