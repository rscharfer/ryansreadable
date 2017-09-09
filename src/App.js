import React, { Component } from 'react';
import Comment from './components/Comment.js'
import SimplePost from './components/SimplePost.js'
import TopBar from './components/TopBar.js'

import DetailedPost from './components/DetailedPost.js'
import NewCommentForm from './components/NewCommentForm.js'
import NewPostForm from './components/NewPostForm.js'
import StatefulComponent from './components/StatefulComponent.js'
import { Route } from 'react-router-dom';
import PostContainer from './components/PostContainer.js'

class App extends Component {

  constructor(props){
    super(props),
    this.state = {
      addPostWindowShown:true
    }
    this.togWindow = ()=>{
    console.log('new post window toggled')
    if(this.state.addPostWindowShown) this.setState({addPostWindowShown:false})
    else this.setState({addPostWindowShown:true})
    }
  }


  
  render() {
    return (
      <div>
      {!this.state.addPostWindowShown && (
        
          
           <section className="section">
              <div className="container">        
                  <TopBar openWindow={this.togWindow}/>   
                   <Route exact path="/angular" render={
                    ()=><PostContainer cat="Angular"/>
                  }/>
                  <Route exact path="/javascript" render={
                    ()=><PostContainer cat="Javascript"/>
                  }/>
                  <Route exact path="/react" render={
                    ()=><PostContainer cat="React"/>
                  }/>
                  <Route exact path="/" render={
                    ()=><PostContainer/>
                  }/>
                  <Comment/>
                  <Comment/>
                  
             
                  <DetailedPost/>
                  <NewCommentForm/>
                  <NewPostForm/>
                  <StatefulComponent/>
              </div>
          </section>


        )
      }
      {this.state.addPostWindowShown&&(

          <NewPostForm closeWindow={this.togWindow}/>

        )}

      </div>


    


  
    );
  }
}

export default App;
