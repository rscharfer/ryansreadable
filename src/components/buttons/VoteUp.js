import React, { Component } from 'react'
import VoteConstructor from '../../constructors/VoteConstructor.js'

class VoteUp extends Component{

	constructor(props){
		super(props);
		//this.state = {postID:props.postID}
		// props has a postID prop we can use ... we don't need state
		this.upVote = this.upVote.bind(this)
	}

	upVote(e){
			e.preventDefault();
			const id = this.props.postID
			const voteUrl = 'http://localhost:3001/posts/'+id;
			const vote = new VoteConstructor('upVote');
			const headers = {authorization:'crazypassword', 'Content-Type':'application/json'};
			fetch(voteUrl,{headers:headers, method:'POST',body:JSON.stringify(vote)}).then(resp=>resp.json()).then(json=>console.log(json))
			this.props.changeVote('up');
		}

	render(){
		return (<li><a onClick={this.upVote}><span className="icon is-small"><i className="fa fa-thumbs-up"></i></span><span>Vote Up</span></a></li>)

	}
}


export default VoteUp