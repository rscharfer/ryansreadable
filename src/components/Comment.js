import React, { Component } from 'react'
import dateFormat from 'dateformat'
import VoteUp from './buttons/VoteUp.js'
import VoteDown from './buttons/VoteDown.js'
import Edit from './buttons/Edit.js'
import Delete from './buttons/Delete.js'
import { connect } from 'react-redux'



class Comment extends Component{


  constructor(props){
    super()

  }




  render(){

 
    const time = dateFormat(this.props.comment.timestamp, "mmmm dS, yyyy, h:MM:ss TT")

    return (    
          <div className="columns is-centered">
            <div className="column is-10">
              <article className="media">
              <figure className="media-left">
                <p className="image is-64x64">
                  <img src={"http://bulma.io/images/placeholders/128x128.png"} alt="placeholder"/>
                </p>
              </figure>
              <div className="media-content">
                <div className="content">
                  <p>
                    <strong>{this.props.comment.author}</strong> <small>{time}</small><small>&nbsp;&nbsp;Total votes: {this.props.voteScore}</small>
                    <br/>
                    {this.props.comment.body}
                  </p>
               </div>
            </div>
            <div className="media-right">
              <nav className="breadcrumb" aria-label="breadcrumbs">
                  <ul>
                    <Edit meta={this.props.comment} comment={true} showPopulatedCommentForm={this.props.showPopulatedCommentForm}/>
                    <Delete meta={this.props.comment} comment={true}/>  
                    <VoteUp meta={this.props.comment} isComment={true} />
                    <VoteDown meta={this.props.comment} isComment={true} />
                  </ul>
              </nav>
            </div>
            </article>
          </div>
        </div>
        )
  }
 
  



  // props 'comment' contains author, body, deleted, id, parentDeleted, parentID, timestamp, votescore

}

function mapStateToProps(state,ownProps){

  return {
    
    voteScore:state.entities.comments[ownProps.id].voteScore
  }
}

export default connect(mapStateToProps,null)(Comment)