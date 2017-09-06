import React from 'react'


function PostDetailPage(){

  return (      

      <div className="columns is-centered">
      <div className="tile is-parent is-8">
            <article className="tile column is-child box">
              <p className="title">Post Detail</p>
              <p className="subtitle">Total Votes: 124</p>
              <div className="content">
                <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Proin ornare magna eros, eu pellentesque tortor vestibulum ut. Maecenas non massa sem. Etiam finibus odio quis feugiat facilisis.</p>
              </div>
              <nav className="breadcrumb" aria-label="breadcrumbs">
                <ul>
                <li><span>Ryan Scharfer&nbsp;&nbsp;&nbsp;</span></li>
                  <li><span>&nbsp;&nbsp;&nbsp;Jan 5th, 2017&nbsp;&nbsp;&nbsp;</span></li>
                  <li><span>&nbsp;&nbsp;&nbsp;34 Comments&nbsp;&nbsp;&nbsp;</span></li>
                  <li><a href="#"><span className="icon is-small"><i className="fa fa-edit"></i></span><span>Edit</span></a></li>
                  <li><a href="#"><span className="icon is-small"><i className="fa fa-close"></i></span><span>Delete</span></a></li>
                  
              </ul>
            </nav>
            </article>
          </div>
          </div>
          )

}


export default PostDetailPage