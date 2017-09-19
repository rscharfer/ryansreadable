
const VOTECOMMENTDOWN = "VOTECOMMENTDOWN"

export default function voteCommentDown(commentID){

	return {

		type:VOTECOMMENTDOWN,
		comment:commentID,
		
	}

}