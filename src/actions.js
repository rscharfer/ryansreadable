import fetch from 'isomorphic-fetch'
import VoteConstructor from './constructors/VoteConstructor.js'
import CommentConstructor from './constructors/CommentConstructor.js'
import PostConstructor from './constructors/PostConstructor.js'
import EditedPostConstructor from './constructors/EditedPostConstructor.js'
import EditedCommentConstructor from './constructors/EditedCommentConstructor.js'


const api = "http://localhost:3001"

let token = localStorage.token
if (!token)
   token = localStorage.token = Math.random().toString(36).substr(-8)

 const headers = {
  'Accept': 'application/json',
  'Authorization': token,
  'Content-Type': 'application/json'
}


export function sortByDate() {

  return {type:"SORT_BY_DATE"}
}

export function sortByVoteTotal(){

  return {type:"SORT_BY_VOTE_TOTAL"}
}


export function openPostForm(){

  return {
    type:"OPEN_POST_FORM"
  }
}


export function populatePostForm(post){

  return {
    type:"POPULATE_POST_FORM",
    post
  }
}

export function closePostForm(){

  return {
    type:"CLOSE_POST_FORM"
  }
}

export function showPopulatedCommentForm(comment){

  return {
    type:"SHOW_POPULATED_COMMENT_FORM",
    comment
  }
}


export function saveEditedPostToStore(post){

  const newPost = new EditedPostConstructor(post);
  return {
    type:"SAVE_EDITED_POST_TO_STORE",
    newPost
  }
}


export function saveNewPostToStore(post){

  
  const newPost = new PostConstructor(post);
  
  return {
    type:"SAVE_NEW_POST_TO_STORE",
    post : newPost
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

export function saveEditedCommentToStore(comment){
  
  const commentObject = new EditedCommentConstructor(comment) 
  return {
      type : 'SAVE_EDITED_COMMENT_TO_STORE',
      comment:commentObject
  }
}


export function saveNewCommentToStore(comment){

  const newComment = new CommentConstructor(comment);

  return {
    type : 'SAVE_NEW_COMMENT_TO_STORE',
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
  if (/\/(udacity|redux|react)\/(.){5,}/.exec(window.location.pathname)) window.location.pathname = "/"
  return {
      type : 'REMOVE_POST_FROM_STORE',
      id,
      category
  }
}



export function fetchPosts() {
  

  return function (dispatch) {


    return fetch(`${api}/posts`,{ headers} )
      .then(
        response => response.json()
      )
      .then(json =>{

        return dispatch(receivePosts(json))
      }
       
       

      ).then((action)=>{

        const postIDs = action.posts.map(post=>post.id);

        postIDs.forEach(id=>{
          fetch(`${api}/posts/${id}/comments`,{ headers })

          .then(res=>res.json()).then(json=>{
      
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

    return fetch(`${api}/posts/${id}`,{
        headers,
        method: 'DELETE'
    })
      
      
  }
}

export function deleteComment(id) {

  
  return function(dispatch){
    
    return fetch(`${api}/comments/${id}`,{
        headers,
        method: 'DELETE'
    })
      
      
  }
}


export function saveEditedCommentToServer(comment){

  return function(dispatch){



                const stringified = JSON.stringify(comment);
              
              
                return fetch(`${api}/comments/${comment.id}`, {
                    headers,
                    method: 'PUT',
                    body: stringified
                })

               

  }
}


export function saveNewCommentToServer(comment){

  return function(dispatch){


            
                const newPost = new CommentConstructor(comment);
          
      
                const stringified = JSON.stringify(newPost);
      
             
        
                return fetch(`${api}/comments`, {
                    headers,
                    method: 'POST',
                    body: stringified
                })

              
                
  }
}



export function voteUpOnServer(id,isComment) {

  
  return function(dispatch){
  
    if(!isComment){

      const voteUrl = `${api}/posts/${id}`;
      const vote = new VoteConstructor('upVote');
    
     return fetch(voteUrl,{headers, method:'POST',body:JSON.stringify(vote)})
    }

    else {


      const voteUrl = `${api}/comments/${id}`;
      const vote = new VoteConstructor('upVote');

      return fetch(voteUrl,{headers, method:'POST',body:JSON.stringify(vote)})
      

    }
      
  }
     
}


export function saveNewPostToServer(post){


  return function(dispatch){

      const newPost = new PostConstructor(post);
    
      const stringified = JSON.stringify(newPost);

    
      return fetch(`${api}/posts`,{
        headers,
        method:'POST',
        body:stringified
        }).then(res=>console.log('response:new post to server',res))
  }
}


export function saveEditedPostToServer(post){


  return function(dispatch){

      const editObject = {title:post.title,body:post.message};
    
      const stringified = JSON.stringify(editObject);
    

      
      return fetch(`${api}/posts/${post.id}`,{
        headers,
        method:'PUT',
        body:stringified
        }).then(res=>console.log('response: edited post to server',res))
  }
}



export function voteDownOnServer(id,isComment) {

  
  return function(dispatch){
  
    if(!isComment){
      
      const voteUrl = `${api}/posts/${id}`;
      const vote = new VoteConstructor('downVote');

     return fetch(voteUrl,{headers, method:'POST',body:JSON.stringify(vote)})
    }

    else {

      
      const voteUrl = `${api}/comments/${id}`;
      const vote = new VoteConstructor('downVote');

      return fetch(voteUrl,{headers, method:'POST',body:JSON.stringify(vote)})
      

    }
      
  }      
}


