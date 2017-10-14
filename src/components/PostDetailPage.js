import React, { Component } from 'react'
import TopBar from './TopBar.js';
import DetailedPost from './DetailedPost.js';
import Comment from './Comment.js';
import NewCommentForm from './NewCommentForm.js';
import {connect} from 'react-redux';    

class PostDetailPage extends Component {

  constructor(props){
    super(props)
    console.log(props);
   
    // this.state = {
    //   postID : props.match.params.post,
    //   post:'',
    //   comments:[],
    //   commentBeingEditedID:undefined,
    //   commentBeingEdited:false,
    //   formUserName : '',
    //   formMessage:'',
    //   validPost:true

    // }
    // this.removeComment = this.removeComment.bind(this)
    // this.changeCommentBeingEditedID = this.changeCommentBeingEditedID.bind(this)
    // this.addCommentToState = this.addCommentToState.bind(this)
    // this.showPopulatedCommentForm = this.showPopulatedCommentForm.bind(this)
    // this.commentBeingEditedFalse = this.commentBeingEditedFalse.bind(this)
    // this.updatePost = this.updatePost.bind(this);
  }

 // showPopulatedCommentForm(meta){
 //    this.setState(
 //      {formUserName:meta.author,
 //      formMessage:meta.body})
 // }


 // componentWillReceiveProps(nextProps){
 
 
 //  nextProps.validPosts.forEach(post=>{
   
 //      if(post.id===this.props.match.params.post){
        
 //        this.setState({validPost:true})
 //      } 
        
 //    })
 // }

 //  componentDidMount(){
 //    const url = 'http://localhost:3001/posts/'+this.state.postID+'/comments';
 //    const headers = {authorization:'crazypassword'};
 //    fetch(url,{headers:headers}).then(resp=>resp.json()).then(json=>this.setState({comments:json}));
 //  }

 //  removeComment(id){
 //      this.setState(
 //        (prevState,props)=>{
 //          return {comments:prevState.comments.filter(comment=>comment.id!==id)}
 //        }
 //    )
 //  }

 //  changeCommentBeingEditedID(id){
 //    this.setState({
 //      commentBeingEditedID:id,
 //       commentBeingEdited:true

 //    })
 //  }

 //  commentBeingEditedFalse(){
 //    this.setState({commentBeingEdited:false})
 //  }

 //  addCommentToState(newComment){
 //    this.setState((prevState,props)=>{
 //      return {comments: prevState.comments.concat(newComment)}
 //    })
 //  }

 //  updatePost(updatedComment,id){
 //     this.setState((prevState,props)=>{
 //        const changedComment = prevState.comments.filter(comment=>comment.id===id)[0];
 //        changedComment.author = updatedComment.author;
 //        changedComment.body = updatedComment.body;
 //        const restComments = prevState.comments.filter(comment=>comment.id!==id)
 //        return {comments:restComments.concat(changedComment)}

 //     })
 //  }


  render() {

    return (
      <div>
      
        <section className="section">
              <div className="container">             
                  <DetailedPost commentNumber = {this.props.comments.length} post={this.props.post.id}/>
                  {this.props.comments.map(comment=><Comment key={comment.id} id={comment.id} changeEditId={this.changeCommentBeingEditedID} showPopulatedCommentForm={this.showPopulatedCommentForm} removeComment={this.removeComment} comment={comment}/>)}
                  <NewCommentForm updatePost={this.updatePost} commentBeingEditedFalse={this.commentBeingEditedFalse} addCommentToState={this.addCommentToState} formUserName={this.state.formUserName} formMessage={this.state.formMessage} commentBeingEdited={this.state.commentBeingEdited} editId={this.state.commentBeingEditedID}/>
              </div>
          </section>
          
    

   
          
      </div>
  
    );

    
  }
}


const mapStateToProps = (state,ownProps) => {
  console.log('here is the state at the beginning',state)
  const postID = ownProps.match.params.post;
  console.log('here is the postID',postID)
  console.log('here is the post in question',state.entities.posts[postID])
  const comments = [];
  const sec = state.entities.comments;

  for (let prop in sec) {
    if(sec[prop].parentId===postID) comments.push(sec[prop])
  }

  return {
    post:state.entities.posts[postID],
    comments: comments,


  }
}


const mapDispatchToProps = dispatch => {
  return {
   
    

  }
}



export default connect(
  mapStateToProps,
  mapDispatchToProps
)(PostDetailPage)