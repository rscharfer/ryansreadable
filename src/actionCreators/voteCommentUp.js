
const VOTECOMMENTUP = "VOTECOMMENTUP"

export default function voteCommentUp(commentID){

	return {

		type:VOTECOMMENTUP,
		payload:{comment:commentID}
		
		
	}

}