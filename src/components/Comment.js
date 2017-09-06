import React from 'react'



function Comment(){

    return (

    
      <div className="columns is-centered">
      <div className="column is-10">
        <article className="media">
  <figure className="media-left">
    <p className="image is-64x64">
      <img src={"http://bulma.io/images/placeholders/128x128.png"}/>
    </p>
  </figure>
  <div className="media-content">
    <div className="content">
      <p>
        <strong>John Smith</strong> <small>Jan 5th, 2014 06:23pm</small><small>&nbsp;&nbsp;Total votes:20</small>
        <br/>
        Lorem ipsum dolor sit amet, consectetur adipiscing elit. Proin ornare magna eros, eu pellentesque tortor vestibulum ut. Maecenas non massa sem. Etiam finibus odio quis feugiat facilisis.
      </p>
    </div>

  </div>
  <div className="media-right">
     <nav className="breadcrumb" aria-label="breadcrumbs">
                <ul>
               
                  <li><a href="#"><span className="icon is-small"><i className="fa fa-edit"></i></span><span>Edit</span></a></li>
                  <li><a href="#"><span className="icon is-small"><i className="fa fa-close"></i></span><span>Delete</span></a></li>
                  <li><a href="#"><span className="icon is-small"><i className="fa fa-thumbs-up"></i></span><span>Vote Up</span></a></li>
                  <li><a href="#"><span className="icon is-small"><i className="fa fa-thumbs-down"></i></span><span>Vote Down</span></a></li>
                  
              </ul>
            </nav>
  </div>
</article>
</div>
</div>

      
      


    
    )
}



export default Comment