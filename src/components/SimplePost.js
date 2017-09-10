import React, { Component } from 'react'
import VoteUp from './buttons/VoteUp.js'
import VoteDown from './buttons/VoteDown.js'
import Edit from './buttons/Edit.js'

class SimplePost extends Component{

  constructor(props){
    super();
    this.state={
      commentTotal : 0,
      voteTotal:props.meta.voteScore,
    }
    this.changeVoteTotal = this.changeVoteTotal.bind(this);
  }

  componentDidMount(){

    const url = 'http://localhost:3001/posts/'+this.props.meta.id+'/comments';
    const headers = {authorization:'crazypassword'};
    fetch(url,{headers:headers}).then(resp=>resp.json()).then(json=>this.setState({commentTotal:json.length}));

  }

  changeVoteTotal(direction){
    if (direction==='up') this.setState((prevState,props)=>{voteTotal:prevState.voteTotal++})
    else if (direction='down') this.setState((prevState,props)=>{voteTotal:prevState.voteTotal--})
  }




  render(){


    return (      

      <div className="columns is-centered">
      <div className="tile is-parent is-8">
            <article className="tile column is-child box">
              <p className="title">{this.props.meta.title}</p>
              <p className="subtitle">Total Votes: {this.state.voteTotal}</p>
            
             <nav className="breadcrumb" aria-label="breadcrumbs">
                <ul>
                <li><span>{this.props.meta.author}&nbsp;&nbsp;&nbsp;</span></li>
                  <li><span>&nbsp;&nbsp;&nbsp;{this.props.meta.timeStamp}&nbsp;&nbsp;&nbsp;</span></li>
                  <li><span>&nbsp;&nbsp;&nbsp;{this.state.commentTotal} Comments&nbsp;&nbsp;&nbsp;</span></li>
                  <VoteUp postID={this.props.meta.id} changeVote={this.changeVoteTotal}/>
                  <VoteDown postID={this.props.meta.id} changeVote={this.changeVoteTotal}/>
                  <Edit postID={this.props.meta.id} openWindow={this.props.openWindow}/>                     
                    <li><a href="#"><span className="icon is-small"><i className="fa fa-close"></i></span><span>Delete</span></a></li>
                  
              </ul>
            </nav>
            </article>
          </div>
          </div>
          )
  } 

}


export default SimplePost





    