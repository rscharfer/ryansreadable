import React from 'react'
import VoteUp from './VoteUp.js'


function SimplePost(props){

  console.log('props is ',props)
  return (      

      <div className="columns is-centered">
      <div className="tile is-parent is-8">
            <article className="tile column is-child box">
              <p className="title">{props.meta.title}</p>
              <p className="subtitle">Total Votes: {props.meta.voteScore}</p>
            
             <nav className="breadcrumb" aria-label="breadcrumbs">
                <ul>
                <li><span>{props.meta.author}&nbsp;&nbsp;&nbsp;</span></li>
                  <li><span>&nbsp;&nbsp;&nbsp;{props.meta.timeStamp}&nbsp;&nbsp;&nbsp;</span></li>
                  <li><span>&nbsp;&nbsp;&nbsp;34 Comments&nbsp;&nbsp;&nbsp;</span></li>
                  <VoteUp postID={props.meta.id}/>                  
                  <li><a href="#"><span className="icon is-small"><i className="fa fa-thumbs-down"></i></span><span>Vote Down</span></a></li>
                  <li><a href="#"><span className="icon is-small"><i className="fa fa-edit"></i></span><span>Edit</span></a></li>
                  <li><a href="#"><span className="icon is-small"><i className="fa fa-close"></i></span><span>Delete</span></a></li>
                  
              </ul>
            </nav>
            </article>
          </div>
          </div>
          )

}


export default SimplePost





    