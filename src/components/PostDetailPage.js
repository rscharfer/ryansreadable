import React, { Component } from 'react'
import DetailedPost from './DetailedPost.js';
import Comment from './Comment.js';
import NewCommentForm from './NewCommentForm.js';
import {connect} from 'react-redux';
import _orderBy from 'lodash.orderby';  

class PostDetailPage extends Component {

  constructor(props){

    // initially set the state and update initial state when api call is returned from server which will update the redux state and then mapStateToProps will be called (componentWillReceiveProps)
    super(props)
    this.state={

        post:props.post,
        validPost:props.validPost,
      
    }
  }



  componentWillReceiveProps(nextProps){



    this.setState((prevState, props) => {
      return {

         post:nextProps.post,
         validPost:nextProps.validPost

      };
    });
  }



  render(){

  

    const valid = this.state.validPost;

    const nonDeletedComments = this.props.comments.filter(comment=>!comment.deleted);
    let orderedComments;

    
    if (this.props.sort==="byDate"){
      orderedComments = _orderBy(nonDeletedComments,'timestamp','desc')
    
    }
    else if (this.props.sort==="byVoteTotal"){
      orderedComments = _orderBy(nonDeletedComments,'voteScore','desc')
      
    }

    return (

        <div>
        { valid ?(
        <section className="section">
              <div className="container">             
                  <DetailedPost commentNumber = {this.props.comments.length} post={this.props.post}/>
                  {orderedComments.map(comment=><Comment key={comment.id} id={comment.id} showPopulatedCommentForm={this.showPopulatedCommentForm} removeComment={this.removeComment} comment={comment}/>)}
                  <NewCommentForm postId={this.props.post.id}/>
              </div>
          </section>) 

        :(<h3>The url you have entered is invalid.</h3>)} 
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


