import React, { Component } from 'react'
import VoteUp from './buttons/VoteUp.js'
import VoteDown from './buttons/VoteDown.js'
import Edit from './buttons/Edit.js'
import Delete from './buttons/Delete.js'

// postDetails has id, title, body, author, and category props
class DetailedPost extends Component{

  constructor(props){
    super();
    // this.state = {
    //   postDetails:{
    //     title:'',
    //     body:'',
    //     author:''
    //   }
    // }
    // this.changeVoteTotal = this.changeVoteTotal.bind(this)
  }


  // componentDidMount(){
  //   fetch(`http://localhost:3001/posts/${this.props.post}`,{headers:{authorization:'crazypassword'}}).then(res=>res.json()).then(data=>this.setState({postDetails:data}))
  // }

  //  changeVoteTotal(direction){
    
  //   if (direction==='up') this.setState((prevState,props)=>{
  //     console.log("called up")
  //     prevState.postDetails.voteScore++
  //     return {prevState}


  //   })
  //   else if (direction='down') this.setState((prevState,props)=>{
  //     console.log("called down")
  //     prevState.postDetails.voteScore--
  //     return {prevState}
  //   })
  // }

  render() {return (      

      <div className="columns is-centered">
      <div className="tile is-parent is-8">
            <article className="tile column is-child box">
              <p className="title">{this.state.postDetails.title}</p>
              <p className="subtitle">Total Votes: {this.state.postDetails.voteScore}</p>
              <div className="content">
                <p>{this.state.postDetails.body}</p>
              </div>
              <nav className="breadcrumb" aria-label="breadcrumbs">
                <ul>
                <li><span>{this.state.postDetails.author}&nbsp;&nbsp;&nbsp;</span></li>
                  <li><span>&nbsp;&nbsp;&nbsp;Jan 5th, 2017&nbsp;&nbsp;&nbsp;</span></li>
                  <li><span>&nbsp;&nbsp;&nbsp;{this.props.commentNumber} Comments&nbsp;&nbsp;&nbsp;</span></li>
                  <VoteUp meta={this.state.postDetails} changeVote={this.changeVoteTotal}/>
                  <VoteDown meta={this.state.postDetails} changeVote={this.changeVoteTotal}/>
                  <li><a href="#"><span className="icon is-small"><i className="fa fa-edit"></i></span><span>Edit</span></a></li>
                
                  <Delete meta={this.state.postDetails}/>    
                  
              </ul>
            </nav>
            </article>
          </div>
          </div>
          )
  }

}


export default DetailedPost
