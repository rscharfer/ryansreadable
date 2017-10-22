import React from 'react';
import SimplePost from './SimplePost.js';
import {connect} from 'react-redux';
import _orderBy from 'lodash.orderby'


const PostContainer = props => {



	console.log('post container rendered')
	const nonDeletedPosts = props.posts.filter(post=>!post.deleted);
	let orderedPosts;

    if (props.sort==="byDate")
    	orderedPosts = _orderBy(nonDeletedPosts,'timestamp','desc')
    else if (props.sort==="byVoteTotal")
    	orderedPosts = _orderBy(nonDeletedPosts,'voteScore','desc')
    console.log('ordered posts',orderedPosts)

	return (

		<div>
				{orderedPosts.map((post)=>{
					
					return <SimplePost key={post.id} postId={post.id}/>
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
    sort:state.sortType

  }
}





export default connect(
  mapStateToProps,
  null
)(PostContainer)






