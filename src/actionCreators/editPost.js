const EDITPOST = "EDITPOST"

export default function editPost(postID,title,body,author){

	return {

		type:EDITPOST,
		post:postID,
		timestamp: Date.now(),
		title,
		body,
		author
		
		
	}

}