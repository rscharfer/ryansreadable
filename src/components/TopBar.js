import React, { Component } from 'react'
import { Link } from 'react-router-dom'



function TopBar(props){


  return(

      <nav className="level is-mobile">
  <div className="level-left">
    <p className="level-item">
      <Link to="/">All</Link>
    </p>
    <p className="level-item">
      <Link to="/udacity">Udacity</Link>
    </p>
    <p className="level-item">
      <Link to="/react">React</Link>
    </p>
    <p className="level-item">
      <Link to="/redux">Redux</Link>
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
      <a className="button is-success" onClick={props.showEmptyPostForm}>Create New Post</a>
    </p></div>
</nav>


      )

}




export default TopBar