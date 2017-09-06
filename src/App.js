import React, { Component } from 'react';
import MediaPost from './components/MediaPost.js'
import PostMainPage from './components/PostMainPage.js'
import TopBar from './components/TopBar.js'
import CommentForm from './components/NewCommentForm.js'

class App extends Component {
  render() {
    return (
      <div>
          <section className="section">
              <div className="container">        
                  <TopBar/>      
                  <PostMainPage/>
                  <MediaPost/>
                  <MediaPost/>
                  <CommentForm/> 
              </div>
          </section>
      </div>
  
    );
  }
}

export default App;
