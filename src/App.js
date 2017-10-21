import React, { Component } from 'react';
import TopBar from './components/TopBar.js'
import PostContainer from './components/PostContainer.js'
import PostForm from './components/PostForm.js'
import PostDetailPage from './components/PostDetailPage.js'
import { Route, Switch, withRouter } from 'react-router-dom';
import { connect } from 'react-redux'


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

  

    // this.showEmptyPostForm = this.showEmptyPostForm.bind(this)
 
    // this.showPopulatedPostForm = this.showPopulatedPostForm.bind(this);

    
  }

  // showEmptyPostForm(){

  //     this.setState({
  //       showPostForm:true,
  //       emptyForm:true
  //     })
    
  // }
  // componentDidMount(){

  
  //   fetch(`http://localhost:3001/posts`,{headers:{authorization:'crazypassword'}})
  //           .then(res=>res.json())
  //           .then(data=>this.setState({posts:data.filter(post=>!post.deleted)}))

  //   fetch(`http://localhost:3001/categories`,{headers:{authorization:'crazypassword'}})
  //           .then(res=>res.json())
  //           .then(data=>this.setState({categories:data.categories}))
            
  // }

  // showPopulatedPostForm(parent){

  //   this.setState({
  //     showPostForm:true,
  //     emptyForm:false,
  //     currentlyEditedObject:parent
  //   })
  // }



  render() {
 

    return (
      <div>

      {console.log("true or false",!this.props.postFormIsShown)}

      {!this.props.postFormIsShown && (

           <section className="section">
              <div className="container">        
                  <TopBar/>
                  <Switch>   
                       <Route exact path="/udacity" render={
                        ()=><PostContainer cat="udacity"/>
                      }/>
                      <Route exact path="/" render={
                        ()=><PostContainer cat="all"/>
                      }/>
                      <Route exact path="/react" render={
                        ()=><PostContainer cat="react"/>
                      }/>
                      <Route exact path="/redux" render={
                        ()=><PostContainer cat="redux"/>
                      }/>
                      <Route exact path="/" render={
                        ()=><PostContainer/>
                      }/>
                      <Route path="/udacity/:post" render={props=>(
                          // <PostDetailPage {...props}  validPosts={this.state.posts} showPopulatedForm={this.showPopulatedPostForm}/>
                          <PostDetailPage {...props}  />
                        )} />
                       <Route path="/redux/:post" render={props=>(
                        // <PostDetailPage {...props}  validPosts={this.state.posts} showPopulatedForm={this.showPopulatedPostForm} />
                        <PostDetailPage {...props} />
                      )} />
                       <Route path="/react/:post" render={props=>{
                        
                        return(
                        // <PostDetailPage {...props} validPosts={this.state.posts} showPopulatedForm={this.showPopulatedPostForm} />
                        <PostDetailPage {...props}  />
                      )}
                      } />
            
                      
                  </Switch>

               
                 
              </div>
          </section>
        )
      }


      {this.props.postFormIsShown && (

          <PostForm/>
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


export default withRouter(connect(mapStateToProps,mapDispatchToProps)(App));
