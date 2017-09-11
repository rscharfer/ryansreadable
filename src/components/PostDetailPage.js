import React, { Component } from 'react'
import TopBar from './TopBar.js';
import DetailedPost from './DetailedPost.js'; 

class PostDetailPage extends Component {



  render() {
    return (
      <div>
          <section className="section">
              <div className="container">             
                  <DetailedPost post={this.props.match.params.post}/>
              </div>
          </section>
      </div>
  
    );
  }
}

export default PostDetailPage;