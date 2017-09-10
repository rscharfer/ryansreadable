import React, { Component } from 'react';
import TopBar from './components/TopBar.js'
import PostContainer from './components/PostContainer.js'
import NewPostForm from './components/NewPostForm.js'
import { Route } from 'react-router-dom';


class App extends Component {

  constructor(props){

    super(props)

    this.state = {
      editPost:false,
      currentlyEdited:'',
    }

    this.togWindow = this.togWindow.bind(this)

    
  }

  togWindow(id){
    

    if(this.state.editPost) this.setState({editPost:false})
    else this.setState({editPost:true})

    if(id)this.setState({currentlyEdited:id})
    }


  openWindowForEditing(){
    this.setState({editPost:true})
  }

  
  render() {
    return (
      <div>
      {!this.state.editPost && (
        
          
           <section className="section">
              <div className="container">        
                  <TopBar openWindow={this.togWindow}/>   
                   <Route exact path="/angular" render={
                    ()=><PostContainer openWindow={this.togWindow} cat="Angular"/>
                  }/>
                  <Route exact path="/javascript" render={
                    ()=><PostContainer openWindow={this.togWindow} cat="Javascript"/>
                  }/>
                  <Route exact path="/react" render={
                    ()=><PostContainer openWindow={this.togWindow} cat="React"/>
                  }/>
                  <Route exact path="/" render={
                    ()=><PostContainer openWindow={this.togWindow}/>
                  }/>
                  
                 
              </div>
          </section>


        )
      }
      {this.state.editPost&&(

          <NewPostForm id={this.state.currentlyEdited} closeWindow={this.togWindow}/>

        )}

      </div>


    


  
    );
  }
}

export default App;
