
const VOTECOMMENTDOWN = "VOTECOMMENTDOWN"

export default function voteCommentDown(commentID){

	return {

		type:VOTECOMMENTDOWN,
		payload:{comment:commentID}
		
	}

}