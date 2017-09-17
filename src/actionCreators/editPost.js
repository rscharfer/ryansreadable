const EDITPOST = "EDITPOST"

export default function editPost(postID,title,body){

	return {

		type:EDITPOST,
		post:postID,
		timestamp: Date.now(),
		title:title,
		body : body
		
		
	}

}