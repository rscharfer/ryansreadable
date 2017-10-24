import React from 'react';
import TopBar from './components/TopBar.js'
import PostContainer from './components/PostContainer.js'
import PostForm from './components/PostForm.js'
import PostDetailPage from './components/PostDetailPage.js'
import { Route, Switch, withRouter } from 'react-router-dom';
import { connect } from 'react-redux'





// FOR REVIEWER : there is a fixed amount of categories in the application.  
const App = (props) => {


    return (
      <div>

      {console.log("true or false",!props.postFormIsShown)}

      {!props.postFormIsShown && (

           <section className="section">
              <div className="container">        
                  <TopBar/>
                  <Switch>


                      <Route exact path="/" render={
                        ()=><PostContainer cat="all"/>
                      }/>   

                       <Route exact path="/udacity" render={
                        ()=><PostContainer cat="udacity"/>
                      }/>
                   
                      <Route exact path="/react" render={
                        ()=><PostContainer cat="react"/>
                      }/>

                      <Route exact path="/redux" render={
                        ()=><PostContainer cat="redux"/>
                      }/>
                     
                      <Route path="/udacity/:post" render={props=>(
                          
                          <PostDetailPage {...props}  />
                        )} />
                       <Route path="/redux/:post" render={props=>(
                       
                        <PostDetailPage {...props} />
                      )} />
                       <Route path="/react/:post" render={props=>(
                        
                        <PostDetailPage {...props}  />
                      )} />
            
                      
                  </Switch>

               
                 
              </div>
          </section>
        )
      }


      {props.postFormIsShown && (

          <PostForm/>
        )
      }

      </div>
  
    );
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
