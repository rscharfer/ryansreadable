import fetch from 'isomorphic-fetch'

export const REQUEST_POSTS = 'REQUEST_POSTS'
function requestPosts() {
  return {
    type: REQUEST_POSTS,
    
  }
}

export const RECEIVE_POSTS = 'RECEIVE_POSTS'
function receivePosts(json) {
  return {
    type: RECEIVE_POSTS,
    posts: json.filter(post => !post.deleted),
  }
}

export const REQUEST_COMMENTS = 'REQUEST_POSTS'
function requestComments(id) {
  return {
    type: REQUEST_COMMENTS,
    id
  }
}

export const RECEIVE_COMMENTS = 'RECEIVE_POSTS'
function receiveComments(json) {
  return {
    type: RECEIVE_COMMENTS,
    posts: json.data.children.map(child => child.data),
  }
}

fetch("http://localhost:3001/posts",{
        headers: { 'Authorization': 'whatever-you-want' }
    }).then(res=>res.json()).then(data=>console.log(data))


// Meet our first thunk action creator!
// Though its insides are different, you would use it just like any other action creator:
// store.dispatch(fetchPosts('reactjs'))

export function fetchPosts() {
  // Thunk middleware knows how to handle functions.
  // It passes the dispatch method as an argument to the function,
  // thus making it able to dispatch actions itself.

  return function (dispatch) {
    // First dispatch: the app state is updated to inform
    // that the API call is starting.

    dispatch(requestPosts())

    // The function called by the thunk middleware can return a value,
    // that is passed on as the return value of the dispatch method.

    // In this case, we return a promise to wait for.
    // This is not required by thunk middleware, but it is convenient for us.

    return fetch("http://localhost:3001/posts",{
        headers: { 'Authorization': 'whatever-you-want' }
    })
      .then(
        response => response.json(),
        // Do not use catch, because that will also catch
        // any errors in the dispatch and resulting render,
        // causing an loop of 'Unexpected batch number' errors.
        // https://github.com/facebook/react/issues/6895
        error => console.log('An error occured.', error)
      )
      .then(json =>
        // We can dispatch many times!
        // Here, we update the app state with the results of the API call.

        dispatch(receivePosts(json))
      )
  }
}