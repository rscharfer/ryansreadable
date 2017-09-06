import React, { Component } from 'react' 

class PostDetailPage extends Component {
  render() {
    return (
      <div>
          <section className="section">
              <div className="container">        
                  <TopBar/>      
                  <DetailedPost/>
                  <Comment/>
                  <Comment/>
                  <NewCommentForm/>
              </div>
          </section>
      </div>
  
    );
  }
}

export default PostDetailPage;