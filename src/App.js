import React, { Component } from 'react';
import Comment from './components/Comment.js'
import SimplePost from './components/SimplePost.js'
import TopBar from './components/TopBar.js'

import DetailedPost from './components/DetailedPost.js'
import NewCommentForm from './components/NewCommentForm.js'
import NewPostForm from './components/NewPostForm.js'

class App extends Component {
  render() {
    return (
      <div>
          <section className="section">
              <div className="container">        
                  <TopBar/>      
                  <SimplePost/>
                  <Comment/>
                  <Comment/>
             
                  <DetailedPost/>
                  <NewCommentForm/>
                  <NewPostForm/>
              </div>
          </section>
      </div>
  
    );
  }
}

export default App;
