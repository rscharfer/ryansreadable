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

    //  showPostForm:false,
    //  emptyForm:false,
    //  currentlyEditedObject:undefined,
    //  posts : [],
    //  categories : []
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
  // componentDidMount(){

  
  //   fetch(`http://localhost:3001/posts`,{headers:{authorization:'crazypassword'}})
  //           .then(res=>res.json())
  //           .then(data=>this.setState({posts:data.filter(post=>!post.deleted)}))

  //   fetch(`http://localhost:3001/categories`,{headers:{authorization:'crazypassword'}})
  //           .then(res=>res.json())
  //           .then(data=>this.setState({categories:data.categories}))
            
  // }

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
 
  console.log('here are the props for app.js',this.props)
    return (
      <div>


      {!this.props.postFormIsShown && (

           <section className="section">
              <div className="container">        
                  <TopBar showEmptyPostForm={this.showEmptyPostForm}/>
                  <Switch>   
                       <Route exact path="/udacity" render={
                        ()=><PostContainer showPopulatedForm={this.showPopulatedPostForm} cat="udacity"/>
                      }/>
                      <Route exact path="/" render={
                        ()=><PostContainer showPopulatedForm={this.showPopulatedPostForm} cat="all"/>
                      }/>
                      <Route exact path="/react" render={
                        ()=><PostContainer showPopulatedForm={this.showPopulatedPostForm} cat="react"/>
                      }/>
                      <Route exact path="/redux" render={
                        ()=><PostContainer showPopulatedForm={this.showPopulatedPostForm} cat="redux"/>
                      }/>
                      <Route exact path="/" render={
                        ()=><PostContainer showPopulatedForm={this.showPopulatedPostForm}/>
                      }/>
                      <Route path="/udacity/:post" render={props=>(
                          // <PostDetailPage {...props}  validPosts={this.state.posts} showPopulatedForm={this.showPopulatedPostForm}/>
                          <PostDetailPage {...props}  showPopulatedForm={this.showPopulatedPostForm} />
                        )} />
                       <Route path="/redux/:post" render={props=>(
                        // <PostDetailPage {...props}  validPosts={this.state.posts} showPopulatedForm={this.showPopulatedPostForm} />
                        <PostDetailPage {...props} showPopulatedForm={this.showPopulatedPostForm} />
                      )} />
                       <Route path="/react/:post" render={props=>{
                        
                        return(
                        // <PostDetailPage {...props} validPosts={this.state.posts} showPopulatedForm={this.showPopulatedPostForm} />
                        <PostDetailPage {...props} showPopulatedForm={this.showPopulatedPostForm} />
                      )}
                      } />
            
                      
                  </Switch>

               
                 
              </div>
          </section>
        )
      }


      {this.props.postFormIsShown && (

          <PostForm newPost={this.state.emptyForm} meta={this.state.currentlyEditedObject} closeWindow={this.closePostForm}/>
        )
      }

      </div>
  
    );
  }


}

function mapStateToProps(state){


  return {
    postFormIsShown:state.postFormIsShown
  }
}


function mapDispatchToProps(dispatch){

  return{

  }
}


export default connect(mapStateToProps,mapDispatchToProps)(App);
