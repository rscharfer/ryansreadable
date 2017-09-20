import uuid from 'uuid/v1';

const EDITCOMMENT = "EDITCOMMENT"

export default function editComment(commentID, body, author) {

    return {

        type: EDITCOMMENT,
        payload: {
            comment: commentID,
            timestamp: Date.now(),
            body,
            author
        }



    }

}