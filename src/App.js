import React, { Component } from 'react';
import TopBar from './components/TopBar.js'
import PostContainer from './components/PostContainer.js'
import PostForm from './components/PostForm.js'
import PostDetailPage from './components/PostDetailPage.js'
import { Route, Switch } from 'react-router-dom';


class App extends Component {

  constructor(props){

    super(props)

    this.state = {

      showPostForm:false,
      emptyForm:false,
      currentlyEditedObject:undefined
    }

  

    this.showEmptyPostForm = this.showEmptyPostForm.bind(this)
 
    this.showPopulatedPostForm = this.showPopulatedPostForm.bind(this);

    this.closePostForm = this.closePostForm.bind(this);
  }

  showEmptyPostForm(){

      this.setState({
        showPostForm:true,
        emptyForm:true
      })
    
  }

  showPopulatedPostForm(parent){

    this.setState({
      showPostForm:true,
      emptyForm:false,
      currentlyEditedObject:parent
    })
  }

  closePostForm(){

    this.setState({showPostForm:false})
  }

  render() {
    return (
      <div>


      {!this.state.showPostForm && (

           <section className="section">
              <div className="container">        
                  <TopBar showEmptyPostForm={this.showEmptyPostForm}/>
                  <Switch>   
                       <Route exact path="/angular" render={
                        ()=><PostContainer showPopulatedForm={this.showPopulatedPostForm} cat="Angular"/>
                      }/>
                      <Route exact path="/javascript" render={
                        ()=><PostContainer showPopulatedForm={this.showPopulatedPostForm} cat="Javascript"/>
                      }/>
                      <Route exact path="/react" render={
                        ()=><PostContainer showPopulatedForm={this.showPopulatedPostForm} cat="React"/>
                      }/>
                      <Route exact path="/redux" render={
                        ()=><PostContainer showPopulatedForm={this.showPopulatedPostForm} cat="redux"/>
                      }/>
                      <Route exact path="/" render={
                        ()=><PostContainer showPopulatedForm={this.showPopulatedPostForm}/>
                      }/>
                      <Route path="/angular/:post" component={PostDetailPage} showPopulatedForm={this.showPopulatedPostForm}/>
                      <Route path="/javascript/:post" component={PostDetailPage} showPopulatedForm={this.showPopulatedPostForm}/>
                      <Route path="/react/:post" component={PostDetailPage} showPopulatedForm={this.showPopulatedPostForm}/>
                      <Route path="/redux/:post" component={PostDetailPage} showPopulatedForm={this.showPopulatedPostForm}/>
                  </Switch>

                  
                 
              </div>
          </section>
        )
      }


      {this.state.showPostForm && (

          <PostForm newPost={this.state.emptyForm} meta={this.state.currentlyEditedObject} closeWindow={this.closePostForm}/>
        )
      }

      </div>
  
    );
  }


}

export default App;
