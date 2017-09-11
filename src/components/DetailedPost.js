import React, { Component } from 'react'

// postDetails has id, title, body, author, and category props
class DetailedPost extends Component{

  constructor(props){
    super();
    this.state = {
      postDetails:{
        title:'',
        body:'',
        author:''
      }
    }
  }


  componentDidMount(){
    fetch(`http://localhost:3001/posts/${this.props.post}`,{headers:{authorization:'crazypassword'}}).then(res=>res.json()).then(data=>this.setState({postDetails:data}))
  }

  render() {return (      

      <div className="columns is-centered">
      <div className="tile is-parent is-8">
            <article className="tile column is-child box">
              <p className="title">{this.state.postDetails.title}</p>
              <p className="subtitle">Total Votes: 124</p>
              <div className="content">
                <p>{this.state.postDetails.body}</p>
              </div>
              <nav className="breadcrumb" aria-label="breadcrumbs">
                <ul>
                <li><span>{this.state.postDetails.author}&nbsp;&nbsp;&nbsp;</span></li>
                  <li><span>&nbsp;&nbsp;&nbsp;Jan 5th, 2017&nbsp;&nbsp;&nbsp;</span></li>
                  <li><span>&nbsp;&nbsp;&nbsp;34 Comments&nbsp;&nbsp;&nbsp;</span></li>
                  <li><a href="#"><span className="icon is-small"><i className="fa fa-thumbs-up"></i></span><span>Vote Up</span></a></li>
                  <li><a href="#"><span className="icon is-small"><i className="fa fa-thumbs-down"></i></span><span>Vote Down</span></a></li>
                  <li><a href="#"><span className="icon is-small"><i className="fa fa-edit"></i></span><span>Edit</span></a></li>
                  <li><a href="#"><span className="icon is-small"><i className="fa fa-close"></i></span><span>Delete</span></a></li>
                  
              </ul>
            </nav>
            </article>
          </div>
          </div>
          )
  }

}


export default DetailedPost
