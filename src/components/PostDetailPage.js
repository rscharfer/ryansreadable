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
  }


  componentDidMount(){
    const url = 'http://localhost:3001/posts/'+this.state.postID+'/comments';
    const headers = {authorization:'crazypassword'};
    fetch(url,{headers:headers}).then(resp=>resp.json()).then(json=>this.setState({comments:json}));
  }



  render() {
    return (
      <div>
          <section className="section">
              <div className="container">             
                  <DetailedPost post={this.state.postID}/>
                  {this.state.comments.map(comment=><Comment key={comment.id} comment={comment}/>)}
              </div>
          </section>
      </div>
  
    );
  }
}

export default PostDetailPage;