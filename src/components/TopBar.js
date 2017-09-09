import React, { Component } from 'react'
import jsObject from '../PostObjects/JavaScriptPostObject.js'
import { Link } from 'react-router-dom'



function TopBar(){


  const createPost = ()=>{

  	console.log('button pop')

  	fetch("http://localhost:3001/posts",{
  		headers: { 'authorization': 'crazypassword',
  					'Content-Type': 'application/json' },
  		method:'POST',
  		body:JSON.stringify(jsObject)

  	}).then(res=>console.log(res))
  }

  return(

      <nav className="level is-mobile">
  <div className="level-left">
    <p className="level-item">
      <Link to="/">All</Link>
    </p>
    <p className="level-item">
      <Link to="Javascript">Javascript</Link>
    </p>
    <p className="level-item">
      <Link to="React">React</Link>
    </p>
    <p className="level-item">
      <Link to="Angular">Angular</Link>
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
      <a className="button is-success" onClick={createPost}>Create New Post</a>
    </p></div>
</nav>


      )

}




export default TopBar