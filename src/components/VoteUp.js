import React, { Component } from 'react'


class VoteUp extends Component{

	constructor(props){
		super(props);
		//this.state = {postID:props.postID}
		// props has a postID prop we can use ... we don't need state
		this.upVote = this.upVote.bind(this)
	}

	upVote(e){
			e.preventDefault();
			console.log(this.state);
		}

	render(){
		return (<li><a onClick={this.upVote}><span className="icon is-small"><i className="fa fa-thumbs-up"></i></span><span>Vote Up</span></a></li>)

	}
}


export default VoteUp