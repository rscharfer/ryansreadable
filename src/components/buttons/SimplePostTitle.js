import React, { Component } from 'react'
import { Link } from 'react-router-dom'



class SimplePostTitle extends Component{

	constructor(props){
		super()
	}

	render(){
		return (<Link to={'/'+this.props.meta.category+'/'+this.props.meta.id}><p className="title">{this.props.meta.title}</p></Link>)
	}
}


export default SimplePostTitle