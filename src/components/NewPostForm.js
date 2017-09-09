import React, { Component } from 'react'
import PostConstructor from './PostConstructor.js'



class NewPostForm extends Component{

    constructor(props){
    super();
    this.postToServer = this.postToServer.bind(this);
    this.state = {
      userName : '',
      title : '',
      category : 'Javascript',
      message : '',
    }
    
}

    postToServer(){

    const newPost = new PostConstructor(this.state);
    const stringified = JSON.stringify(newPost);
    const headers = {authorization:'crazypassword', 'Content-Type':'application/json'};
    fetch("http://localhost:3001/posts",{
      headers:headers,
      method:'POST',
      body:stringified
    }).then(response=>response.json()).then(json=>console.log(json));
    this.props.closeWindow();
}


    render(){

 return (
<div className="columns is-centered">
<div className=" column is-8">
  <div className="field">
    <label className="label">Title</label>
    <div className="control">
      <input className="input" type="text" onChange={
        (e)=>this.setState( {title:e.target.value} )
      } 
      placeholder="My Post Title"/>
    </div>
  </div>

  <div className="field">
    <label className="label">Username</label>
    <div className="control has-icons-left">
      <input className="input is-success" type="text" onChange={
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
      <select onChange={
        (e)=>this.setState( {category:e.target.value} )
      }>
        <option>Javascript</option>
        <option>React</option>
        <option>Angular</option>
      </select>
    </div>
  </div>
</div>

<div className="field">
  <label className="label">Message</label>
  <div className="control">
    <textarea className="textarea" onChange={
      (e)=>this.setState( {message:e.target.value} )
    }placeholder="Post your message here"></textarea>
  </div>
</div>


<div className="field is-grouped">
  <div className="control">
    <button className="button is-primary" onClick={this.postToServer}>Submit</button>
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






export default NewPostForm