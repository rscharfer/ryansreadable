import React, { Component } from 'react'
import { connect } from 'react-redux'
import { saveEditedPostToStore, saveEditedPostToServer, saveNewPostToStore, saveNewPostToServer, closePostForm  } from '../actions'



class PostForm extends Component{


    constructor(props){
      super();

      this.state = {
        userName : props.postBeingEdited ? props.postBeingEdited.author : "" ,
        title : props.postBeingEdited ? props.postBeingEdited.title : "",
        category : props.postBeingEdited ? props.postBeingEdited.category : 'udacity',
        message : props.postBeingEdited ? props.postBeingEdited.body : "",
      
      }
    
    }




    completeStateForEditingActions(){

      const completeState = Object.assign({},this.state,{
        id:this.props.postBeingEdited.id,
        voteScore:this.props.postBeingEdited.voteScore
      })

      return completeState;
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
      <input className="input is-success" value={this.state.userName} type="text" onChange={ (e)=>this.setState( {userName:e.target.value} )}placeholder="Joe Smith"/>
      <span className="icon is-small is-left">
        <i className="fa fa-user"></i>
      </span>
    </div>
</div>

<div className="field">
  <label className="label">Category</label>
  <div className="control">
    <div className="select">
      <select value={this.state.category} onChange={ (e)=>this.setState( {category:e.target.value} ) }>

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
    <textarea className="textarea" value={this.state.message} onChange={ (e)=>this.setState( {message:e.target.value} ) }placeholder="Post your message here"></textarea>
  </div>
</div>


<div className="field is-grouped">
  <div className="control">
    <button className="button is-primary" onClick={this.props.postBeingEdited?()=>{this.props.saveEditedPost(this.completeStateForEditingActions())}:()=>{this.props.saveNewPost(this.state)}}>Save</button>
  </div>
  <div className="control">
    <button className="button is-link" onClick={this.props.closePostForm}>Cancel</button>
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
      dispatch(closePostForm())
    },

    saveNewPost:(post)=>{
      dispatch(saveNewPostToStore(post))
      dispatch(saveNewPostToServer(post))
      dispatch(closePostForm())

    },

    closePostForm:()=>{
      dispatch(closePostForm())
    }

  }
}

function mapStateToProps(state){

  return {


    postBeingEdited:state.postBeingEdited

  }
}



export default connect(mapStateToProps,mapDispatchToProps)(PostForm)
