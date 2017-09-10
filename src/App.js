import React, { Component } from 'react';
import TopBar from './components/TopBar.js'
import PostContainer from './components/PostContainer.js'
import PostForm from './components/PostForm.js'
import { Route } from 'react-router-dom';


class App extends Component {

  constructor(props){

    super(props)

    this.state = {
      showPostForm:false,
      emptyForm:false,
    //  currentlyEdited:'',
    //  currentPosts : [],
    //  currentlyEditedObject:{},
    }

  

    this.showEmptyPostForm = this.showEmptyPostForm.bind(this)
 
    // this.refreshState = this.refreshState.bind(this);

    this.showPopulatedPostForm = this.showPopulatedPostForm.bind(this);

    this.closePostForm = this.closePostForm.bind(this);

    
  }



    closePostForm(){

      this.setState({showPostForm:false})
    }

    showPopulatedPostForm(parent){

      this.setState({
        showPostForm:true,
        emptyForm:false,
        currentlyEditedObject:parent

      })

      // this.setState({showPostForm:true})
      // this.setState({emptyForm:false})

      // // this.setState({currentlyEdited:id})
      // this.setState({currentlyEditedObject:parent})
    

    }

    showEmptyPostForm(){

        this.setState({showPostForm:true})
        this.setState({emptyForm:true})
        
    }




//   refreshState(){
      
//       this.setState(this.state)
//   }

// componentDidUpdate(){console.log('updated')}

  
  render() {
    return (
      <div>
      {!this.state.showPostForm && (
        
          
           <section className="section">
              <div className="container">        
                  <TopBar showEmptyPostForm={this.showEmptyPostForm}/>   
                   <Route exact path="/angular" render={
                    ()=><PostContainer showPopulatedForm={this.showPopulatedPostForm} cat="Angular"/>
                  }/>
                  <Route exact path="/javascript" render={
                    ()=><PostContainer showPopulatedForm={this.showPopulatedPostForm} cat="Javascript"/>
                  }/>
                  <Route exact path="/react" render={
                    ()=><PostContainer showPopulatedForm={this.showPopulatedPostForm} cat="React"/>
                  }/>
                  <Route exact path="/" render={
                    ()=><PostContainer showPopulatedForm={this.showPopulatedPostForm}/>
                  }/>
                  
                 
              </div>
          </section>


        )
      }
      {this.state.showPostForm && (

          <PostForm newPost={this.state.emptyForm} meta={this.state.currentlyEditedObject} closeWindow={this.closePostForm}/>

        )}

      </div>


    


  
    );
  }
}

export default App;
