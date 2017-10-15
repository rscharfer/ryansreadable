import React, { Component } from 'react'
import VoteUp from './buttons/VoteUp.js'
import VoteDown from './buttons/VoteDown.js'
import Edit from './buttons/Edit.js'
import Delete from './buttons/Delete.js'
import SimplePostTitle from './buttons/SimplePostTitle.js'
import { connect } from 'react-redux'

const SimplePost = (props)=>{

    return (      

      
      <div className="columns is-centered">
      <div className="tile is-parent is-8">
            <article className="tile column is-child box">
              <SimplePostTitle meta={props.post}/>
              <p className="subtitle">Total Votes: {props.post.voteScore}</p>
            
             <nav className="breadcrumb" aria-label="breadcrumbs">
                <ul>
                <li><span>{props.post.author}&nbsp;&nbsp;&nbsp;</span></li>
                  <li><span>&nbsp;&nbsp;&nbsp;{props.post.timeStamp}&nbsp;&nbsp;&nbsp;</span></li>
                  <li><span>&nbsp;&nbsp;&nbsp;{props.post.commentTotal} Comments&nbsp;&nbsp;&nbsp;</span></li>
                  <VoteUp meta={props.post}/>
                  <VoteDown meta={props.post}/>
                  <Edit meta={props.post} showPopulatedForm={props.showPopulatedForm}/>
                  <Delete meta={props.post}/>                     
                  
              </ul>
            </nav>
            </article>
          </div>
          </div>)
   
}

function mapStateToProps(state,ownProps){

  return {
    post:state.entities.posts[ownProps.postId],
    allEntities:state.entities
  }
}


export default connect(mapStateToProps,null)(SimplePost)







    