import React from 'react'
import VoteConstructor from '../../constructors/VoteConstructor.js'
import {connect} from 'react-redux';
import { voteUpOnServer, voteUpOnStore } from '../../actions'

const VoteUp = (props) => {

	

	function upVote(id){
	
		props.voteUpOnServer(id);
		props.voteUpOnStore(id);
			
	}

	
		return (<li><a onClick={()=>{upVote(props.meta.id)}}><span className="icon is-small"><i className="fa fa-thumbs-up"></i></span><span>Vote Up</span></a></li>)

	
}


const mapDispatchToProps = (dispatch, ownProps) => {

  return {
  
    voteUpOnServer : (id) => dispatch(voteUpOnServer(id,ownProps.isComment)),
    voteUpOnStore : (id) => dispatch(voteUpOnStore(id,ownProps.isComment)),
  }
}		


export default connect(
  mapStateToProps,
  mapDispatchToProps
)(VoteUp)