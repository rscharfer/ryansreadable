import React, { Component } from 'react'


function CommentForm(){

  
    return (

      <article className="media">
  <figure className="media-left">
    <p className="image is-64x64">
      <img src={"http://bulma.io/images/placeholders/128x128.png"}/>
    </p>
  </figure>
  <div className="media-content">
    <div className="field">
      <p className="control">
        <textarea className="textarea" placeholder="Add a comment..."></textarea>
      </p>
    </div>
    <nav className="level">
      <div className="level-left">
        <div className="level-item">
          <a className="button is-info">Submit</a>
        </div>
      </div>
      <div className="level-right">
        <div className="level-item">
          <label className="checkbox">
            <input type="checkbox"/> {"Press enter to submit"}
          </label>
        </div>
      </div>
    </nav>
  </div>
</article>


      )


}






export default CommentForm