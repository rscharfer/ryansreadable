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
    comments:{},
    isFetching:true

  },
  action
) {
  switch (action.type) {
    
    case "REQUEST_POSTS":
      return Object.assign({}, state, {
        isFetching: true
      })
    case "REMOVE_POST":
      console.log(`post removed and the id is`,action.id)
    case "REQUEST_COMMENTS":
      return Object.assign({}, state, {
        isFetching: true
      })
    case "RECEIVE_POSTS":
      return Object.assign({}, state, {
        
        posts: action.posts.reduce((result,post,index)=>{
          result[post.id] = post;
          return result
        },{}),
        
        isFetching: false,
      
      })
      case "RECEIVE_COMMENTS":
      return Object.assign({}, state, {
        
        
        comments:action.comments,
        isFetching: false,
      
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