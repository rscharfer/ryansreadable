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
    let newStore = Object.assign({},state);
    delete newStore.posts[action.id];
    return newStore;

    case "REMOVE_COMMENT_FROM_STORE":{
    let newStore = Object.assign({},state);
    delete newStore.comments[action.id];
    return newStore;}

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
      case "COMMENTS_RECEIVED":
      const origComments = state.comments;
      
      action.comments.forEach(comment=>{
        origComments[comment.id] = comment
      })
      return Object.assign({},state,{
        comments:origComments
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
    
    case "REMOVE_POST_FROM_STORE":
      let orig = state[action.category]
      orig.splice(orig.indexOf(action.id),1)
      return Object.assign({},state,{
        [action.category] : orig
      })
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