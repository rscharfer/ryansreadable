import React, { Component } from 'react'


function NewCommentForm(){

  
    return (

    	<div className="columns is-centered">
    	<div className="column is-8">

      <div className="field">
    <label className="label">Username</label>
    <div className="control has-icons-left">
      <input className="input is-success" type="text" placeholder="Joe Smith"/>
      <span className="icon is-small is-left">
        <i className="fa fa-user"></i>
      </span>
    </div>
</div>


<div className="field">
  <label className="label">Message</label>
  <div className="control">
    <textarea className="textarea" placeholder="Post your message here"></textarea>
  </div>
</div>


<div className="field is-grouped">
  <div className="control">
    <button className="button is-primary">Submit</button>
  </div>
  <div className="control">
    <button className="button is-link">Cancel</button>
  </div>
</div>

</div>
</div>


      )


}






export default NewCommentForm