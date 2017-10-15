import React from 'react'
import {connect} from 'react-redux';
import { voteUpOnServer, voteUpOnStore } from '../../actions'

const VoteUp = (props) => {

	

	function upVote(e){
		e.preventDefault();
		props.voteUpOnServer(props.meta.id);
		props.voteUpOnStore(props.meta.id);
			
	}

	
		return (<li><a onClick={upVote}><span className="icon is-small"><i className="fa fa-thumbs-up"></i></span><span>Vote Up</span></a></li>)

	
}


const mapDispatchToProps = (dispatch, ownProps) => {

  return {
  
    voteUpOnServer : (id) => dispatch(voteUpOnServer(id,ownProps.isComment)),
    voteUpOnStore : (id) => dispatch(voteUpOnStore(id,ownProps.isComment)),
  }
}		


export default connect(
  null,
  mapDispatchToProps
)(VoteUp)