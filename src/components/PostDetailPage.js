import React, { Component } from 'react'
import TopBar from './TopBar.js';
import DetailedPost from './DetailedPost.js';
import Comment from './Comment.js';  

class PostDetailPage extends Component {

  constructor(props){
    super()
    this.state = {
      postID : props.match.params.post,
      post:'',
      comments:[]
    }
    this.removeComment = this.removeComment.bind(this)
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



  render() {
    return (
      <div>
          <section className="section">
              <div className="container">             
                  <DetailedPost post={this.state.postID}/>
                  {this.state.comments.map(comment=><Comment key={comment.id} removeComment={this.removeComment} comment={comment}/>)}
              </div>
          </section>
      </div>
  
    );
  }
}

export default PostDetailPage;