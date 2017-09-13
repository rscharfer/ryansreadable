import React, { Component } from 'react'
import TopBar from './TopBar.js';
import DetailedPost from './DetailedPost.js';
import Comment from './Comment.js';
import NewCommentForm from './NewCommentForm.js';    

class PostDetailPage extends Component {

  constructor(props){
    super()
    this.state = {
      postID : props.match.params.post,
      post:'',
      comments:[],
      commentBeingEditedID:undefined,
      commentBeingEdited:false,
      formUserName : '',
      formMessage:''
    }
    this.removeComment = this.removeComment.bind(this)
    this.changeCommentBeingEditedID = this.changeCommentBeingEditedID.bind(this)
    this.addCommentToState = this.addCommentToState.bind(this)
    this.showPopulatedCommentForm = this.showPopulatedCommentForm.bind(this)
    this.commentBeingEditedFalse = this.commentBeingEditedFalse.bind(this)
    this.updatePost = this.updatePost.bind(this);
  }

 showPopulatedCommentForm(meta){
    this.setState(
      {formUserName:meta.author,
      formMessage:meta.body})
 }




  componentDidMount(){
    const url = 'http://localhost:3001/posts/'+this.state.postID+'/comments';
    const headers = {authorization:'crazypassword'};
    fetch(url,{headers:headers}).then(resp=>resp.json()).then(json=>this.setState({comments:json}));
  }

  removeComment(id){
      this.setState(
        (prevState,props)=>{
          return {comments:prevState.comments.filter(comment=>comment.id!==id)}
        }
    )
  }

  changeCommentBeingEditedID(id){
    this.setState({
      commentBeingEditedID:id,
       commentBeingEdited:true

    })
  }

  commentBeingEditedFalse(){
    this.setState({commentBeingEdited:false})
  }

  addCommentToState(newComment){
    this.setState((prevState,props)=>{
      return {comments: prevState.comments.concat(newComment)}
    })
  }

  updatePost(updatedComment,id){
     this.setState((prevState,props)=>{
        const changedComment = prevState.comments.filter(comment=>comment.id===id)[0];
        changedComment.author = updatedComment.author;
        changedComment.body = updatedComment.body;
        const restComments = prevState.comments.filter(comment=>comment.id!==id)
        return {comments:restComments.concat(changedComment)}

     })
  }


  render() {
    return (
      <div>
          <section className="section">
              <div className="container">             
                  <DetailedPost post={this.state.postID}/>
                  {this.state.comments.map(comment=><Comment key={comment.id} id={comment.id} changeEditId={this.changeCommentBeingEditedID} showPopulatedCommentForm={this.showPopulatedCommentForm} removeComment={this.removeComment} comment={comment}/>)}
                  <NewCommentForm updatePost={this.updatePost} commentBeingEditedFalse={this.commentBeingEditedFalse} addCommentToState={this.addCommentToState} formUserName={this.state.formUserName} formMessage={this.state.formMessage} commentBeingEdited={this.state.commentBeingEdited} editId={this.state.commentBeingEditedID}/>
              </div>
          </section>
      </div>
  
    );
  }
}

export default PostDetailPage;