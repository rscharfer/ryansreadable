import React, { Component } from 'react'


function NewPostForm(){

  
    return (
<div>
  <div className="field">
    <label className="label">Title</label>
    <div className="control">
      <input className="input" type="text" placeholder="My Post Title"/>
    </div>
  </div>

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
  <label className="label">Category</label>
  <div className="control">
    <div className="select">
      <select>
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


      )


}






export default NewPostForm