import React, { Component } from 'react';
import TopBar from './components/TopBar.js'
import PostContainer from './components/PostContainer.js'
import NewPostForm from './components/NewPostForm.js'
import { Route } from 'react-router-dom';


class App extends Component {

  constructor(props){
    super(props),
    this.state = {
      addPostWindowShown:false
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
