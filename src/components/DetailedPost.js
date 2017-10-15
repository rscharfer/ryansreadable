import React from 'react'
import VoteUp from './buttons/VoteUp.js'
import VoteDown from './buttons/VoteDown.js'
import Edit from './buttons/Edit.js'
import Delete from './buttons/Delete.js'




const DetailedPost = (props) =>{


    return (      

      <div className="columns is-centered">
      <div className="tile is-parent is-8">
            <article className="tile column is-child box">
              <p className="title">{props.post.title}</p>
              <p className="subtitle">Total Votes: {props.post.voteScore}</p>
              <div className="content">
                <p>{props.post.body}</p>
              </div>
              <nav className="breadcrumb" aria-label="breadcrumbs">
                <ul>
                <li><span>{props.post.author}&nbsp;&nbsp;&nbsp;</span></li>
                  <li><span>&nbsp;&nbsp;&nbsp;Jan 5th, 2017&nbsp;&nbsp;&nbsp;</span></li>
                  <li><span>&nbsp;&nbsp;&nbsp;{props.commentNumber} Comments&nbsp;&nbsp;&nbsp;</span></li>
                  <VoteUp meta={props.post} changeVote={this.changeVoteTotal}/>
                  <VoteDown meta={props.post} changeVote={this.changeVoteTotal}/>
                  <li><a href="#"><span className="icon is-small"><i className="fa fa-edit"></i></span><span>Edit</span></a></li>
                
                  <Delete meta={props.post}/>    
                  
              </ul>
            </nav>
            </article>
          </div>
          </div>
          )
}


export default DetailedPost
