
const VOTEPOSTUP = "VOTEPOSTUP"

export default function votePostUp(postID){

	return {

		type:VOTEPOSTUP,
		post:postID,
		
	}

}