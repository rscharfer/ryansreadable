import React, { Component } from 'react'
import PostConstructor from '../constructors/PostConstructor.js'
import { connect } from 'react-redux'
import { saveEditedPostToStore, saveEditedPostToServer, saveNewPostToStore, saveNewPostToServer  } from '../actions'



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

      this.props.saveEditedPost(this.state)

      this.props.closeWindow();
    }

    postToServer(){

      this.props.saveNewPost(this.state)

      this.props.closeWindow();
}


    render(){
       

 return (
    <div className="columns is-centered">
      <div className=" column is-8">
        <div className="field">
          <label className="label">Title</label>
          <div className="control">
            <input className="input" type="text" value={this.state.title} onChange={ (e)=>this.setState( {title:e.target.value} )} placeholder="My Post Title"/>
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

        <option>udacity</option>
        <option>react</option>
        <option>redux</option>


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


function mapDispatchToProps(dispatch) {

  return {
    saveEditedPost:(post)=>{
      dispatch(saveEditedPostToStore(post))
      dispatch(saveEditedPostToServer(post))
    },

    saveNewPost:(post)=>{
      dispatch(saveNewPostToStore(post))
      dispatch(saveNewPostToServer(post))
    }

  }
}

function mapStateToProps(state){

  return {

  }
}



export default connect(mapStateToProps,mapDispatchToProps)(PostForm)
