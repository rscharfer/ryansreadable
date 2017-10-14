import { combineReducers } from 'redux'


function selectedView(state = 'all', action) {
  switch (action.type) {
    case "SELECT_VIEW":
      return action.view
    default:
      return state
  }
}


function sortTypeComments(state='byDate', action){

  switch (action.type) {
    case "SELECT_VIEW":
      return action.sort
    default:
      return state
  }

}


function sortTypePosts(state='byDate', action){

  switch (action.type) {
    case "SELECT_VIEW":
      return action.sort
    default:
      return state
  }

}


function entities(
  state = {
    posts:{},
    comments:{}

  },
  action
) {

  switch (action.type) {
    
    // case "REQUEST_POSTS":
    //   return state

    case "REMOVE_POST_FROM_STORE":
    const newStore = Object.assign({},state);
    delete newStore.posts[action.id];
    return newStore;

    case "REQUEST_COMMENTS":
      return state
    case "RECEIVE_POSTS":

      return Object.assign({}, state, {
        
        posts: action.posts.reduce((result,post,index)=>{
          result[post.id] = post;
          return result
        },{}),
        
        
      
      })
      case "RECEIVE_COMMENTS":
      return Object.assign({}, state, {
        
        
        comments:action.comments
      
      })
    default:
      return state
  }
}

function postsByCategory(state = {
  react:[],
  redux:[],
  udacity:[]
}, action) {
  switch (action.type) {
    
    case "RECEIVE_POSTS":
      return Object.assign({}, state, {
        react: action.posts.reduce((result,post)=>{
          if(post.category==="react") result.push(post.id)
          return result
        },[]),
        redux: action.posts.reduce((result,post)=>{
          if(post.category==="redux") result.push(post.id)
          return result
        },[]),
        udacity: action.posts.reduce((result,post)=>{
          if(post.category==="udacity") result.push(post.id)
          return result
        },[]),
      })
    default:
      return state
  }
}

const rootReducer = combineReducers({
  selectedView,
  sortTypeComments,
  sortTypePosts,
  entities,
  postsByCategory

})

export default rootReducer