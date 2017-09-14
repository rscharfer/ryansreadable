import React, { Component } from 'react'
import VoteConstructor from '../../constructors/VoteConstructor.js'

class VoteDown extends Component{

	constructor(props){
		super(props);
		this.downVote = this.downVote.bind(this)
	}

	// downVote(e){
	// 		e.preventDefault();
	// 		const id = this.props.meta.id
	// 		const voteUrl = 'http://localhost:3001/posts/'+id;
	// 		const vote = new VoteConstructor('downVote');
	// 		const headers = {authorization:'crazypassword', 'Content-Type':'application/json'};
	// 		fetch(voteUrl,{headers:headers, method:'POST',body:JSON.stringify(vote)}).then(resp=>resp.json()).then(json=>console.log(json))
	// 		this.props.changeVote('down');
	// 	}

	downVote(e){
		if(!this.props.isComment){
			
			e.preventDefault();
			const id = this.props.meta.id
			const voteUrl = 'http://localhost:3001/posts/'+id;
			const vote = new VoteConstructor('downVote');
			const headers = {authorization:'crazypassword', 'Content-Type':'application/json'};
			fetch(voteUrl,{headers:headers, method:'POST',body:JSON.stringify(vote)})
			this.props.changeVote('downVote');
		}
		else{
		
			e.preventDefault();
			const id = this.props.meta.id
			const voteUrl = 'http://localhost:3001/comments/'+id;
			const vote = new VoteConstructor('downVote');
			const headers = {authorization:'crazypassword', 'Content-Type':'application/json'};
			fetch(voteUrl,{headers:headers, method:'POST',body:JSON.stringify(vote)})
			this.props.changeVote('downVote');
		}
			
	}

	render(){
		return (<li><a onClick={this.downVote}><span className="icon is-small"><i className="fa fa-thumbs-down"></i></span><span>Vote Down</span></a></li>)

	}
}


export default VoteDown