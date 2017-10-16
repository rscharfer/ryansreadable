import React, { Component } from 'react';
import { Route } from 'react-router-dom';
import SimplePost from './SimplePost.js';
import {connect} from 'react-redux';
import _orderBy from 'lodash.orderby'
import _map from 'lodash.map'


const PostContainer = props => {




	const nonDeletedPosts = props.posts.filter(post=>!post.deleted);

    const orderedPosts = _orderBy(nonDeletedPosts,'timestamp','asc')
    

	return (
		<div>
				{orderedPosts.map((post)=>{
					
					return <SimplePost key={post.id} postId={post.id} showPopulatedForm={props.showPopulatedForm}/>
				})}
				</div>
		)



}

const mapStateToProps = (state, ownProps) => {
  
  const posts = [];

  for (let id in state.entities.posts){
  	if(state.entities.posts[id].category===ownProps.cat) posts.push(state.entities.posts[id])
  		else if (ownProps.cat==="all") posts.push(state.entities.posts[id])
  }

  return {
    posts,
    

  }
}


// const mapDispatchToProps = dispatch => {
	
//   return {
//     removePost : (id) => dispatch({
//       type : 'REMOVE_POST',
//       id
//     })
//   }
// }


export default connect(
  mapStateToProps,
  null
)(PostContainer)

// class PostContainer extends Component {

// 	constructor(props){
// 		super(props);

		
		

// 	}

	
 

	// componentDidMount(){

	// 	console.log('post container mounted')
	// 	const posts = fetch(`http://localhost:3001${this.props.cat?'/'+this.props.cat:''}/posts`,{headers:{authorization:'crazypassword'}})
	// 				  .then(res=>{
					  	
	// 				  	return res.json()
	// 				  })
	// 				  .then(data=>{
					  
	// 				    console.log(data);
	// 				  	this.setState({posts:data.filter(post=>!post.deleted)})
					  	
	// 				  })
					  
	// }

	// componentWillReceiveProps(nextProps){
	// 	console.log('will receive props')
	// 	console.log('cat is',nextProps.cat)
	// 	const posts = fetch(`http://localhost:3001${nextProps.cat?'/'+nextProps.cat:''}/posts`,{headers:{authorization:'crazypassword'}})
	// 				  .then(res=>{
					  	
	// 				  	return res.json()
	// 				  })
	// 				  .then(data=>{
					  
	// 				    console.log('here is the returned date',data);
	// 				  	this.setState({posts:data.filter(post=>!post.deleted)})
					  	
	// 				  })

	// }


	// render(){
		
		
	// 	return (
	// 			<div>
	// 			{this.props.posts.filter(post=>!post.deleted).map((post)=>{
					
	// 				return <SimplePost key={post.id} removePost={this.props.removePost} showPopulatedForm={this.props.showPopulatedForm} meta={post}/>
	// 			})}
	// 			</div>
	// 		)
	// } 
		
// }




