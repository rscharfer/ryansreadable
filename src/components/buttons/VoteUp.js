import React, { Component } from 'react'
import VoteConstructor from '../../constructors/VoteConstructor.js'

class VoteUp extends Component{

	constructor(props){
		super(props);
		this.upVote = this.upVote.bind(this)
	}

	upVote(e){
		if(!this.props.isComment){
			console.log('what the f',this.props.isComment)
			e.preventDefault();
			const id = this.props.meta.id
			const voteUrl = 'http://localhost:3001/posts/'+id;
			const vote = new VoteConstructor('upVote');
			const headers = {authorization:'crazypassword', 'Content-Type':'application/json'};
			fetch(voteUrl,{headers:headers, method:'POST',body:JSON.stringify(vote)})
			this.props.changeVote('up');
		}
		else{
			console.log('making a comment ')
			e.preventDefault();
			const id = this.props.meta.id
			const voteUrl = 'http://localhost:3001/comments/'+id;
			const vote = new VoteConstructor('upVote');
			const headers = {authorization:'crazypassword', 'Content-Type':'application/json'};
			fetch(voteUrl,{headers:headers, method:'POST',body:JSON.stringify(vote)})
			this.props.changeVote('up');
		}
			
	}

	render(){
		return (<li><a onClick={this.upVote}><span className="icon is-small"><i className="fa fa-thumbs-up"></i></span><span>Vote Up</span></a></li>)

	}
}
		



export default VoteUp