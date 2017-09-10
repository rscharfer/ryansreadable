import React, { Component } from 'react';
import TopBar from './components/TopBar.js'
import PostContainer from './components/PostContainer.js'
import PostForm from './components/PostForm.js'
import { Route } from 'react-router-dom';


class App extends Component {

  constructor(props){

    super(props)

    this.state = {
      editPost:false,
      currentlyEdited:'',
      currentPosts : [],
      currentlyEditedObject:{}
    }

    this.togWindow = this.togWindow.bind(this)
 
    this.refreshState = this.refreshState.bind(this);

    
  }

  togWindow(id,parent){
    

    if(this.state.editPost) this.setState({editPost:false})
    else this.setState({editPost:true})

    if(id)this.setState({currentlyEdited:id})
    if(parent)this.setState({currentlyEditedObject:parent})
    }




  refreshState(){

  console.log('refresh state called')
  this.setState(this.state)
}

componentDidUpdate(){console.log('updated')}

  
  render() {
    return (
      <div>
      {!this.state.editPost && (
        
          
           <section className="section">
              <div className="container">        
                  <TopBar openWindow={this.togWindow}/>   
                   <Route exact path="/angular" render={
                    ()=><PostContainer refreshAppState = {this.refreshState} openWindow={this.togWindow} cat="Angular"/>
                  }/>
                  <Route exact path="/javascript" render={
                    ()=><PostContainer refreshAppState = {this.refreshState} openWindow={this.togWindow} cat="Javascript"/>
                  }/>
                  <Route exact path="/react" render={
                    ()=><PostContainer refreshAppState = {this.refreshState} openWindow={this.togWindow} cat="React"/>
                  }/>
                  <Route exact path="/" render={
                    ()=><PostContainer refreshAppState = {this.refreshState} openWindow={this.togWindow}/>
                  }/>
                  
                 
              </div>
          </section>


        )
      }
      {this.state.editPost&&(

          <PostForm
 id={this.state.currentlyEdited} meta={this.state.currentlyEditedObject} closeWindow={this.togWindow}/>

        )}

      </div>


    


  
    );
  }
}

export default App;
