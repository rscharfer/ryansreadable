import React from 'react'
import { Link } from 'react-router-dom'
import { connect } from 'react-redux'
import { sortByDate, sortByVoteTotal, openPostForm } from '../actions'



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
    props.sortByVoteTotal();  
  }}>Votes</a>
    </p>
    <p className="level-item">
      <a onClick={(e)=>{
    e.preventDefault();
    props.sortByDate();  
  }}>Date</a>
    </p>
    <p className="level-item">
      <a className="button is-success" onClick={props.openPostForm}>Create New Post</a>
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
    sortByVoteTotal:()=>dispatch(sortByVoteTotal()),
    openPostForm:()=>dispatch(openPostForm())
  }
}



export default connect(mapStateToProps,mapDispatchToProps)(TopBar)