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
      commentBeingEdited:false
    }
    this.removeComment = this.removeComment.bind(this)
    this.changeCommentBeingEditedID = this.changeCommentBeingEditedID.bind(this)
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



  render() {
    return (
      <div>
          <section className="section">
              <div className="container">             
                  <DetailedPost post={this.state.postID}/>
                  {this.state.comments.map(comment=><Comment key={comment.id} id={comment.id} changeEditId={this.changeCommentBeingEditedID} showPopulatedForm={this.props.showPopulatedForm} removeComment={this.removeComment} comment={comment}/>)}
                  <NewCommentForm commentBeingEdited={this.state.commentBeingEdited} editId={this.state.commentBeingEditedID} parentId={this.state.postID}/>
              </div>
          </section>
      </div>
  
    );
  }
}

export default PostDetailPage;