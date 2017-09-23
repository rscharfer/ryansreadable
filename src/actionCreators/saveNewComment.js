const SAVENEWCOMMENT = "SAVENEWCOMMENT"

export default function saveNewComment(body, author, parentId) {

    return {

        type: SAVENEWCOMMENT,
        payload: {
            post: postID,
            id: uuid(),
            timestamp: Date.now(),
            body: message,
            author: userName,
            parentId: parentId
        }


    }

}