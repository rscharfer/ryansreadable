import React, { Component } from 'react'
import CommentConstructor from '../constructors/CommentConstructor.js'

// props has 'comment'
class NewCommentForm extends Component{

  constructor(props){
    super();
    this.state = {
      message:props.formMessage,
      userName:props.formUserName,
      parentId:props.parentId,
      newComment:!props.commentBeingEdited,
      id:undefined,
    }
    this.handleSumbit = this.handleSumbit.bind(this);
    this.saveEdit =this.saveEdit.bind(this);
    this.clearFields = this.clearFields.bind(this);
    this.getOnClick = this.getOnClick.bind(this);

  }

  handleSumbit(){

      console.log('handle submit is called in new commment form')
     
      const newPost = new CommentConstructor(this.state);
      // stringify that comment
      const stringified = JSON.stringify(newPost);
      // create headers
      const headers = {authorization:'crazypassword', 'Content-Type':'application/json'};
      // make the post to server
      fetch("http://localhost:3001/comments",{
        headers:headers,
        method:'POST',
        body:stringified
        })

      this.clearFields()
      this.props.addCommentToState(newPost)


  }



  saveEdit(){


       console.log('save edit is called in new commment form')
  
     
      const editObject = {author:this.state.userName, body:this.state.message, timestamp:Date.now()};
      // stringify that "edit object"
      const stringified = JSON.stringify(editObject);
      // create headers
      console.log(stringified)
      const headers = {authorization:'crazypassword', 'Content-Type':'application/json'};
      // make the put to server
      fetch("http://localhost:3001/comments/"+this.props.editId,{
        headers:headers,
        method:'PUT',
        body:stringified
        })

    this.clearFields()


  }


  clearFields(){

    this.setState({
      message:'',
      userName:''
    })

    this.props.commentBeingEditedFalse()
  }


  getOnClick(bool){

    return bool?this.handleSumbit:this.saveEdit
  }

  componentWillReceiveProps(nextProps) {
  
  if(this.props.formMessage!==nextProps.formMessage||this.props.formUserName!==nextProps.formUserName)
    this.setState({message:nextProps.formMessage,userName:nextProps.formUserName})
  if(this.props.commentBeingEdited!==nextProps.commentBeingEdited)
    this.setState({newComment:!nextProps.commentBeingEdited})
}

  
   render() {


    const onclick = this.getOnClick(this.state.newComment);

    
    return (

      <div className="columns is-centered">
      <div className="column is-8">

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
  <label className="label">Message</label>
  <div className="control">
       <textarea className="textarea" value={this.state.message} onChange={
      (e)=>this.setState( {message:e.target.value} )
    }placeholder="Post your message here"></textarea>
  </div>
</div>


<div className="field is-grouped">
  <div className="control">
      <button className="button is-primary" onClick={onclick}>Save</button>
  </div>
  <div className="control">
    <button className="button is-link" onClick={this.clearFields}>Cancel</button>
  </div>
</div>

</div>
</div>


      )
   } 


}






export default NewCommentForm