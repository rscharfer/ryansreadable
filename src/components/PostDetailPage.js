import React, { Component } from 'react'
import TopBar from './TopBar.js';
import DetailedPost from './DetailedPost.js';
import Comment from './Comment.js';
import NewCommentForm from './NewCommentForm.js';
import {connect} from 'react-redux';
import { Redirect } from 'react-router-dom';
import _orderBy from 'lodash.orderby';
import _map from 'lodash.map';    

const PostDetailPage = (props) => {

    const valid = this.props.validPost;

    const nonDeletedComments = props.comments.filter(comment=>!comment.deleted);
    let orderedComments;

    if (props.sort==="byDate")
      orderedComments = _orderBy(nonDeletedComments,'timestamp','desc')
    else if (props.sort==="byVoteTotal")
      orderedComments = _orderBy(nonDeletedComments,'voteScore','desc')


    return (

        <div>
        { valid?(
        <section className="section">
              <div className="container">             
                  <DetailedPost commentNumber = {this.props.comments.length} post={this.props.post}/>
                  {this.props.comments.map(comment=><Comment key={comment.id} id={comment.id} changeEditId={this.changeCommentBeingEditedID} showPopulatedCommentForm={this.showPopulatedCommentForm} removeComment={this.removeComment} comment={comment}/>)}
                  <NewCommentForm postId={this.props.post.id}/>
              </div>
          </section>) 

        :(<Redirect to="/"/>)} 
        </div>
      )

  }



const mapStateToProps = (state,ownProps) => {
  
  

  // get the post field from the url
  const postID = ownProps.match.params.post;
  const comments = [];
  const sec = state.entities.comments;
  const allPosts = state.postsByCategory.react.concat(state.postsByCategory.redux).concat(state.postsByCategory.udacity)

  // get the comments from the redux store that pertain to this post
  for (let prop in sec) {
    if(sec[prop].parentId===postID) comments.push(sec[prop])
  }

     // map the pertinent post object and each of the comment objects from the redux store
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










































// import React, { Component } from 'react'
// import TopBar from './TopBar.js';
// import DetailedPost from './DetailedPost.js';
// import Comment from './Comment.js';
// import NewCommentForm from './NewCommentForm.js';
// import {connect} from 'react-redux';
// import { Redirect } from 'react-router-dom'    

// class PostDetailPage extends Component {

//   constructor(props){
//     super(props)

//     // this.removeComment = this.removeComment.bind(this)
//     // this.changeCommentBeingEditedID = this.changeCommentBeingEditedID.bind(this)
//     // this.addCommentToState = this.addCommentToState.bind(this)
//     // this.showPopulatedCommentForm = this.showPopulatedCommentForm.bind(this)
//     // this.commentBeingEditedFalse = this.commentBeingEditedFalse.bind(this)
//     // this.updatePost = this.updatePost.bind(this);
//   }

//  // showPopulatedCommentForm(meta){
//  //    this.setState(
//  //      {formUserName:meta.author,
//  //      formMessage:meta.body})
//  // }


//  // componentWillReceiveProps(nextProps){
 
 
//  //  nextProps.validPosts.forEach(post=>{
   
//  //      if(post.id===this.props.match.params.post){
        
//  //        this.setState({validPost:true})
//  //      } 
        
//  //    })
//  // }

//  //  componentDidMount(){
//  //    const url = 'http://localhost:3001/posts/'+this.state.postID+'/comments';
//  //    const headers = {authorization:'crazypassword'};
//  //    fetch(url,{headers:headers}).then(resp=>resp.json()).then(json=>this.setState({comments:json}));
//  //  }

//  //  removeComment(id){
//  //      this.setState(
//  //        (prevState,props)=>{
//  //          return {comments:prevState.comments.filter(comment=>comment.id!==id)}
//  //        }
//  //    )
//  //  }

//  //  changeCommentBeingEditedID(id){
//  //    this.setState({
//  //      commentBeingEditedID:id,
//  //       commentBeingEdited:true

//  //    })
//  //  }

//  //  commentBeingEditedFalse(){
//  //    this.setState({commentBeingEdited:false})
//  //  }

//  //  addCommentToState(newComment){
//  //    this.setState((prevState,props)=>{
//  //      return {comments: prevState.comments.concat(newComment)}
//  //    })
//  //  }

//  //  updatePost(updatedComment,id){
//  //     this.setState((prevState,props)=>{
//  //        const changedComment = prevState.comments.filter(comment=>comment.id===id)[0];
//  //        changedComment.author = updatedComment.author;
//  //        changedComment.body = updatedComment.body;
//  //        const restComments = prevState.comments.filter(comment=>comment.id!==id)
//  //        return {comments:restComments.concat(changedComment)}

//  //     })
//  //  }


//   render() {

//       const valid = this.props.validPost;
      
//       return (

//         <div>
//         { valid?(
//         <section className="section">
//               <div className="container">             
//                   <DetailedPost commentNumber = {this.props.comments.length} post={this.props.post}/>
//                   {this.props.comments.map(comment=><Comment key={comment.id} id={comment.id} changeEditId={this.changeCommentBeingEditedID} showPopulatedCommentForm={this.showPopulatedCommentForm} removeComment={this.removeComment} comment={comment}/>)}
//                   <NewCommentForm postId={this.props.post.id}/>
//               </div>
//           </section>) 

//         :(<Redirect to="/"/>)}
          
    

   
          
//       </div>)
  
    




    


    
//   }
// }


// const mapStateToProps = (state,ownProps) => {
  
  

//   // get the post field from the url
//   const postID = ownProps.match.params.post;
//   const comments = [];
//   const sec = state.entities.comments;
//   const allPosts = state.postsByCategory.react.concat(state.postsByCategory.redux).concat(state.postsByCategory.udacity)

//   // get the comments from the redux store that pertain to this post
//   for (let prop in sec) {
//     if(sec[prop].parentId===postID) comments.push(sec[prop])
//   }

//      // map the pertinent post object and each of the comment objects from the redux store
//   return {

//     post:state.entities.posts[postID],
//     comments: comments,
//     validPost:allPosts.includes(postID),
   


//   }
// }


// const mapDispatchToProps = dispatch => {
//   return {
   
    

//   }
// }



// export default connect(
//   mapStateToProps,
//   mapDispatchToProps
// )(PostDetailPage)