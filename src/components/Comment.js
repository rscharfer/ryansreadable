import React, { Component } from 'react'
import dateFormat from 'dateformat'
import VoteUp from './buttons/VoteUp.js'
import VoteDown from './buttons/VoteDown.js'
import Edit from './buttons/Edit.js'
import Delete from './buttons/Delete.js'



class Comment extends Component{


  constructor(props){
    super()
    this.changeVoteTotal = this.changeVoteTotal.bind(this)
    this.state={
      voteTotal:props.comment.voteScore
    }
  }


  changeVoteTotal(direction){

    if (direction==='up') this.setState((prevState,props)=>{voteTotal:prevState.voteTotal++})
    else if (direction='down') this.setState((prevState,props)=>{voteTotal:prevState.voteTotal--})

  }

  render(){

    console.log('here are props',this.props)
    const time = dateFormat(this.props.comment.timestamp, "mmmm dS, yyyy, h:MM:ss TT")

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
                    <strong>{this.props.comment.author}</strong> <small>{time}</small><small>&nbsp;&nbsp;Total votes: {this.state.voteTotal}</small>
                    <br/>
                    {this.props.comment.body}
                  </p>
               </div>
            </div>
            <div className="media-right">
              <nav className="breadcrumb" aria-label="breadcrumbs">
                  <ul>
                    <Edit meta={this.props.comment} comment={true}  changeEditId={this.props.changeEditId} showPopulatedCommentForm={this.props.showPopulatedCommentForm}/>
                    <Delete meta={this.props.comment} comment={true} removeComment={this.props.removeComment}/>  
                    <VoteUp meta={this.props.comment} isComment={true} changeVote={this.changeVoteTotal}/>
                    <VoteDown meta={this.props.comment} isComment={true} changeVote={this.changeVoteTotal}/>
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



export default Comment