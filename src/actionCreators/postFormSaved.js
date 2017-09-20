const POSTFORMSAVED = "POSTFORMSAVED"

export default function postFormSaved(commentID, author, body, category, title){

	return {

		type:POSTFORMSAVED,
		post:commentID,
		author,
		body,
		category,
		title
		
		
		
	}

}