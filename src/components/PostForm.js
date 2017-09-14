import React, { Component } from 'react'
import PostConstructor from '../constructors/PostConstructor.js'



class PostForm extends Component{

    // props object includes 
      // 'newPost' - is the form empty or not?  
      // 'meta' - if the form is not empty, will be used to populate fields
      // 'closeWindow' - this will hide the form on click

    // 'meta' props object contains author, body, category, deleted, id, timestamp, title, voteScore properties, if the form is empty, the meta prop will be ignored and represents last post to get edited
    // if the form is empty, it will get the default values, it it's to be populated, will use the meta object
    // every instance of PostForm has a postToServer and save


    constructor(props){
      super();

      this.postToServer = this.postToServer.bind(this);
      this.saveEdit = this.saveEdit.bind(this);

      this.state = {
        userName : props.newPost ? '' : props.meta.author ,
        title : props.newPost ? '' : props.meta.title,
        category : props.newPost ? 'javascript' : props.meta.category,
        message : props.newPost ? '' : props.meta.body,
        newPost : props.newPost
      }
    
    }



    saveEdit (){

      console.log('saved edit')
     
      const editObject = {title:this.state.title,body:this.state.message};
      // stringify that "edit object"
      const stringified = JSON.stringify(editObject);
      // create headers
      const headers = {authorization:'crazypassword', 'Content-Type':'application/json'};
      // make the put to server
      fetch("http://localhost:3001/posts/"+this.props.meta.id,{
        headers:headers,
        method:'PUT',
        body:stringified
        })

      this.props.closeWindow();
    }

    postToServer(){

      console.log('posted to server')
      // create a new post with the current state
      const newPost = new PostConstructor(this.state);
      // stringify that post
      const stringified = JSON.stringify(newPost);
      // create headers
      const headers = {authorization:'crazypassword', 'Content-Type':'application/json'};
      // make the post to server
      fetch("http://localhost:3001/posts",{
        headers:headers,
        method:'POST',
        body:stringified
        })

      this.props.closeWindow();
}


    render(){
       

 return (
<div className="columns is-centered">
<div className=" column is-8">
  <div className="field">
    <label className="label">Title</label>
    <div className="control">
      <input className="input" type="text" value={this.state.title} onChange={
        (e)=>this.setState( {title:e.target.value} )
      } 
      placeholder="My Post Title"/>
    </div>
  </div>

  <div className="field">
    <label className="label">Username</label>
    <div className="control has-icons-left">
      <input className="input is-success" value={this.state.userName} type="text" onChange={
        (e)=>this.setState( {userName:e.target.value} )
      }placeholder="Joe Smith"/>
      <span className="icon is-small is-left">
        <i className="fa fa-user"></i>
      </span>
    </div>
</div>

<div className="field">
  <label className="label">Category</label>
  <div className="control">
    <div className="select">
      <select value={this.state.category} onChange={
        (e)=>this.setState( {category:e.target.value} )
      }>
        <option>javascript</option>
        <option>react</option>
        <option>angular</option>
      </select>
    </div>
  </div>
</div>

<div className="field">
  <label className="label">Message</label>
  <div className="control">
    <textarea className="textarea" value={this.state.message} onChange={
      (e)=>this.setState( {message:e.target.value} )
    }placeholder="Post your message here"></textarea>
  </div>
</div>


<div className="field is-grouped">
  <div className="control">
    <button className="button is-primary" onClick={this.state.newPost?this.postToServer:this.saveEdit
}>Save</button>
  </div>
  <div className="control">
    <button className="button is-link" onClick={this.props.closeWindow}>Cancel</button>
  </div>
</div>

</div>
</div>

      )
} 


}






export default PostForm
