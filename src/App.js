import React, { Component } from 'react';
import Comment from './components/Comment.js'
import PostMainPage from './components/PostMainPage.js'
import TopBar from './components/TopBar.js'
import CommentForm from './components/NewCommentForm.js'
import PostDetailPage from './components/PostDetailPage.js'

class App extends Component {
  render() {
    return (
      <div>
          <section className="section">
              <div className="container">        
                  <TopBar/>      
                  <PostMainPage/>
                  <Comment/>
                  <Comment/>
                  <CommentForm/> 
                  <PostDetailPage/>
              </div>
          </section>
      </div>
  
    );
  }
}

export default App;
