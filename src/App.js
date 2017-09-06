import React, { Component } from 'react';
import Comment from './components/Comment.js'
import PostMainPage from './components/PostMainPage.js'
import TopBar from './components/TopBar.js'

import PostDetailPage from './components/PostDetailPage.js'
import NewCommentForm from './components/NewCommentForm.js'
import NewPostForm from './components/NewPostForm.js'

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
             
                  <PostDetailPage/>
                  <NewCommentForm/>
                  <NewPostForm/>
              </div>
          </section>
      </div>
  
    );
  }
}

export default App;
