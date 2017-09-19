import uuid from 'uuid/v1';

const ADDCOMMENT = "ADDCOMMENT"

export default function addComment(body,author,parentId){

	return {

		type:ADDCOMMENT,
		post:postID,
		id : uuid(),
		timestamp : Date.now(),
		body : message,
		author : userName,
		parentId : parentId
		
	}

}