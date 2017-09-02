import React, { Component } from 'react';
import MediaPost from './components/MediaPost.js'
import BoxPost from './components/BoxPost.js'
import TopBar from './components/TopBar.js'
import CommentForm from './components/CommentForm.js'

class App extends Component {
  render() {
    return (
      <div>
          <section className="section">
              <div className="container">        
                  <TopBar/>      
                  <BoxPost/>
                  <MediaPost/>
                  <MediaPost/>her
                  <CommentForm/> 
              </div>
          </section>
      </div>
  
    );
  }
}

export default App;
