import React, { Component } from 'react'

function TopBar(){

  return(

      <nav className="level is-mobile">
  <div className="level-left">
    <p className="level-item">
      <a>All</a>
    </p>
    <p className="level-item">
      <a>Cat 1</a>
    </p>
    <p className="level-item">
      <a>Cat 2</a>
    </p>
    <p className="level-item">
      <a>Cat 3</a>
    </p>
  </div>

   <p className="level-item">
    <span className="is-size-1">Read</span>
  </p>
  <div className="level-right">
   <p className="level-item">
      <strong>Order By:</strong>
    </p>
   <p className="level-item">
      <a>Votes</a>
    </p>
    <p className="level-item">
      <a>Date</a>
    </p>
    <p className="level-item">
      <a className="button is-success">Create New Post</a>
    </p></div>
</nav>


      )

}




export default TopBar