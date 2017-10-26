import React, { Component } from 'react'
import DetailedPost from './DetailedPost.js';
import Comment from './Comment.js';
import NewCommentForm from './NewCommentForm.js';
import {connect} from 'react-redux';
import { Redirect } from 'react-router-dom';
import _orderBy from 'lodash.orderby';  

class PostDetailPage extends Component {





  render(){


    const valid = props.validPost;

    const nonDeletedComments = props.comments.filter(comment=>!comment.deleted);
    let orderedComments;

    
    if (props.sort==="byDate"){
      orderedComments = _orderBy(nonDeletedComments,'timestamp','desc')
    
    }
    else if (props.sort==="byVoteTotal"){
      orderedComments = _orderBy(nonDeletedComments,'voteScore','desc')
      
    }

    return (

        <div>
        { valid ?(
        <section className="section">
              <div className="container">             
                  <DetailedPost commentNumber = {props.comments.length} post={props.post}/>
                  {orderedComments.map(comment=><Comment key={comment.id} id={comment.id} changeEditId={this.changeCommentBeingEditedID} showPopulatedCommentForm={this.showPopulatedCommentForm} removeComment={this.removeComment} comment={comment}/>)}
                  <NewCommentForm postId={props.post.id}/>
              </div>
          </section>) 

        :(<Redirect to="/"/>)} 
        </div>
      )





  } 
}






    

  



const mapStateToProps = (state,ownProps) => {
  


  
  const postID = ownProps.match.params.post;

  const comments = [];
  const sec = state.entities.comments;
  const allPosts = state.postsByCategory.react.concat(state.postsByCategory.redux).concat(state.postsByCategory.udacity)

  // get the comments from the redux store that pertain to this post
  for (let prop in sec) {
    if(sec[prop].parentId===postID) comments.push(sec[prop])
  }

     
  return {

    post:state.entities.posts[postID],
    comments: comments,
    validPost:allPosts.includes(postID),
    sort:state.sortType,
   


  }
}






export default connect(
  mapStateToProps,
  null
)(PostDetailPage)


