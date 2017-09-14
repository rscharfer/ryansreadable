import React, { Component } from 'react';
import { Route } from 'react-router-dom';
import SimplePost from './SimplePost.js';

class PostContainer extends Component {

	constructor(props){
		super(props);

		this.state = { posts: [] }
		this.removePost = this.removePost.bind(this)

	}

	
    removePost(id){
    	
    	this.setState(
    		(prevState,props)=>{
    			return {posts:prevState.posts.filter(post=>post.id!==id)}
    		}
		)
    
    }

	componentDidMount(){

		console.log('post container mounted')
		const posts = fetch(`http://localhost:3001${this.props.cat?'/'+this.props.cat:''}/posts`,{headers:{authorization:'crazypassword'}})
					  .then(res=>{
					  	
					  	return res.json()
					  })
					  .then(data=>{
					  
					    console.log(data);
					  	this.setState({posts:data.filter(post=>!post.deleted)})
					  	
					  })
					  
	}

	componentWillReceiveProps(nextProps){
		console.log('will receive props')
		console.log('cat is',nextProps.cat)
		const posts = fetch(`http://localhost:3001${nextProps.cat?'/'+nextProps.cat:''}/posts`,{headers:{authorization:'crazypassword'}})
					  .then(res=>{
					  	
					  	return res.json()
					  })
					  .then(data=>{
					  
					    console.log('here is the returned date',data);
					  	this.setState({posts:data.filter(post=>!post.deleted)})
					  	
					  })

	}


	render(){
		
		return (
				<div>
				{this.state.posts.filter(post=>!post.deleted).map((post)=>{
					
					return <SimplePost key={post.id} removePost={this.removePost} showPopulatedForm={this.props.showPopulatedForm} meta={post}/>
				})}
				</div>
			)
	} 
		
}







export default PostContainer