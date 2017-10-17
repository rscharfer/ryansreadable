import fetch from 'isomorphic-fetch'
import VoteConstructor from './constructors/VoteConstructor.js'
import CommentConstructor from './constructors/CommentConstructor.js'
import PostConstructor from './constructors/CommentConstructor.js'

export const REQUEST_POSTS = 'REQUEST_POSTS'
function requestPosts() {
  return {
    type: REQUEST_POSTS,
    
  }
}


export function sortByDate() {

  return {type:"SORT_BY_DATE"}
}

export function sortByVoteTotal(){

  return {type:"SORT_BY_VOTE_TOTAL"}
}


export function saveEditedPostToStore(post){

  return {
    type:"SAVE_EDITED_POST_TO_STORE",
    post
  }
}


export function saveNewPostToStore(post){

  return {
    type:"SAVE_NEW_POST_TO_STORE",
    post
  }
}

export const RECEIVE_POSTS = 'RECEIVE_POSTS'
function receivePosts(json) {

  return {
    type: RECEIVE_POSTS,
    posts: json.filter(post => !post.deleted),
  }
}

export function removeCommentfromStore(id){
  
  return {
      type : 'REMOVE_COMMENT_FROM_STORE',
      id
  }
}

export function submitEditedCommentToStore(comment){
  
  return {
      type : 'SUBMIT_EDITED_COMMENT_TO_STORE',
      comment
  }
}


export function addNewCommentToStore(comment){

  const newComment = new CommentConstructor(comment);

  return {
    type : 'ADD_NEW_COMMENT_TO_STORE',
    comment : newComment
  }
}


export function voteUpOnStore(id, isComment) {



  return {
    type: 'VOTE_UP_ON_STORE',
    id,
    isComment
  }
}

export function voteDownOnStore(id, isComment) {



  return {
    type: 'VOTE_DOWN_ON_STORE',
    id,
    isComment
  }
}





export function removePostfromStore(id,category){
  console.log("here is the id of the post",id)
  return {
      type : 'REMOVE_POST_FROM_STORE',
      id,
      category
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

  //  dispatch(requestPosts())

    // The function called by the thunk middleware can return a value,
    // that is passed on as the return value of the dispatch method.

    // In this case, we return a promise to wait for.
    // This is not required by thunk middleware, but it is convenient for us.

    return fetch("http://localhost:3001/posts",{
        headers: { 'Authorization': 'whatever-you-want' }
    })
      .then(
        response => response.json()
      )
      .then(json =>{

        return dispatch(receivePosts(json))
      }
        // We can dispatch many times!
        // // Here, we update the app state with the results of the API call.
        // console.log('response from server',json),
       

      ).then((action)=>{

        const postIDs = action.posts.map(post=>post.id);
        postIDs.forEach(id=>{
          fetch("http://localhost:3001/posts/"+id+"/comments",{
        headers: { 'Authorization': 'whatever-you-want' }
    }).then(res=>res.json()).then(json=>{
      
      return dispatch({
      type:'COMMENTS_RECEIVED',
      comments:json
    })
    })
        })
      }
      

      )
  }
}



export function deletePost(id) {


  return function(dispatch){

    return fetch("http://localhost:3001/posts/"+id,{
        headers: { 'Authorization': 'whatever-you-want' },
        method: 'DELETE'
    })
      
      
  }
}

export function deleteComment(id) {

  
  return function(dispatch){
    
    return fetch("http://localhost:3001/comments/"+id,{
        headers: { 'Authorization': 'whatever-you-want' },
        method: 'DELETE'
    })
      
      
  }
}


export function submitEditedCommentToServer(comment){

  return function(dispatch){


   //  const editObject = { author: comment.userName, body: comment.message, timestamp: Date.now() };
                // stringify that "edit object"
                const stringified = JSON.stringify(comment);
                // create headers
              
                const headers = { authorization: 'crazypassword', 'Content-Type': 'application/json' };
                // make the put to server
                return fetch("http://localhost:3001/comments/" + comment.id, {
                    headers: headers,
                    method: 'PUT',
                    body: stringified
                })

               

  }
}


export function submitNewCommentToServer(comment){

  return function(dispatch){


                console.log('submit is being called ')
                const newPost = new CommentConstructor(comment);
                console.log('this is what the new post looks like',newPost)
                // stringify that comment
                const stringified = JSON.stringify(newPost);
                // create headers
                const headers = { authorization: 'crazypassword', 'Content-Type': 'application/json' };
                // make the post to server
                return fetch("http://localhost:3001/comments", {
                    headers: headers,
                    method: 'POST',
                    body: stringified
                })

              
                
  }
}



export function voteUpOnServer(id,isComment) {

  
  return function(dispatch){
  
    if(!isComment){

      const voteUrl = 'http://localhost:3001/posts/'+id;
      const vote = new VoteConstructor('upVote');
      const headers = {authorization:'crazypassword', 'Content-Type':'application/json'};
     return fetch(voteUrl,{headers:headers, method:'POST',body:JSON.stringify(vote)})
    }

    else {


      const voteUrl = 'http://localhost:3001/comments/'+id;
      const vote = new VoteConstructor('upVote');
      const headers = {authorization:'crazypassword', 'Content-Type':'application/json'};
      return fetch(voteUrl,{headers:headers, method:'POST',body:JSON.stringify(vote)})
      

    }
      
  }
     
}


export function saveNewPostToServer(post){


  return function(dispatch){

      const newPost = new PostConstructor(post);
      // stringify that post
      const stringified = JSON.stringify(newPost);
      // create headers
      const headers = {authorization:'crazypassword', 'Content-Type':'application/json'};
      // make the post to server
      return fetch("http://localhost:3001/posts",{
        headers:headers,
        method:'POST',
        body:stringified
        }).then(res=>console.log('response:new post to server',res))
  }
}


export function saveEditedPostToServer(post){


  return function(dispatch){

      const editObject = {title:post.title,body:post.message};
      // stringify that "edit object"
      const stringified = JSON.stringify(editObject);
      // create headers
      const headers = {authorization:'crazypassword', 'Content-Type':'application/json'};
      // make the put to server
      return fetch("http://localhost:3001/posts/"+post.id,{
        headers:headers,
        method:'PUT',
        body:stringified
        }).then(res=>console.log('response: edited post to server',res))
  }
}



export function voteDownOnServer(id,isComment) {

  
  return function(dispatch){
  
    if(!isComment){
      
      const voteUrl = 'http://localhost:3001/posts/'+id;
      const vote = new VoteConstructor('downVote');
      const headers = {authorization:'crazypassword', 'Content-Type':'application/json'};
     return fetch(voteUrl,{headers:headers, method:'POST',body:JSON.stringify(vote)})
    }

    else {

      console.log('vote down on server is called with comment')
      console.log('comment id is ',id)
      const voteUrl = 'http://localhost:3001/comments/'+id;
      const vote = new VoteConstructor('downVote');
      const headers = {authorization:'crazypassword', 'Content-Type':'application/json'};
      return fetch(voteUrl,{headers:headers, method:'POST',body:JSON.stringify(vote)})
      

    }
      
  }      
}


