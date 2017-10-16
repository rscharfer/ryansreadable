import React, { Component } from 'react'
import { Link } from 'react-router-dom'
import { connect } from 'react-redux'
import { sortByDate, sortByVotes } from '../actions'



function TopBar(props){




  return(

      <nav className="level is-mobile">
  <div className="level-left">
    <p className="level-item">
      <Link to="/">All</Link>
    </p>
    <p className="level-item">
      <Link to="/udacity">Udacity</Link>
    </p>
    <p className="level-item">
      <Link to="/react">React</Link>
    </p>
    <p className="level-item">
      <Link to="/redux">Redux</Link>
    </p>
  </div>

   <p className="level-item">
    <span className="is-size-1">Read</span>
  </p>
  <div className="level-right">
   <p className="level-item">
      <strong>Order By:</strong>
    </p>
   <p className="level-item">
      <a onClick={(e)=>{
    e.preventDefault();
    console.log('sort by votes')  
  }}>Votes</a>
    </p>
    <p className="level-item">
      <a onClick={(e)=>{
    e.preventDefault();
    console.log('sort by date')  
  }}>Date</a>
    </p>
    <p className="level-item">
      <a className="button is-success" onClick={props.showEmptyPostForm}>Create New Post</a>
    </p></div>
</nav>


      )

}


function mapStateToProps(state){

  return {
    detailedShowing:state.selectedView
  }
}

function mapDispatchToProps(dispatch){

  return {
    sortByDate: ()=>dispatch(sortByDate()),
    sortByVotes:()=>dispatch(sortByVotes())
  }
}



export default connect(mapStateToProps,mapDispatchToProps)(TopBar)