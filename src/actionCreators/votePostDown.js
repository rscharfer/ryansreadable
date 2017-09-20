
const VOTEPOSTDOWN = "VOTEPOSTDOWN"

export default function votePostDown(postID){

	return {

		type:VOTEPOSTDOWN,
		payload:{post:postID}
		
	}

}
