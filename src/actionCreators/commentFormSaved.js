const COMMENTFORMSAVED = "COMMENTFORMSAVED"

export default function commentFormSaved(commentID, author, body){

	return {

		type:COMMENTFORMSAVED,
		post:commentID,
		author,
		body
		
		
		
	}

}