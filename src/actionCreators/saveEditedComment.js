import uuid from 'uuid/v1';

const SAVEEDITEDCOMMENT = "SAVEEDITEDCOMMENT"

export default function saveEditedComment(commentID, body, author) {

    return {

        type: SAVEEDITEDCOMMENT,
        payload: {
            comment: commentID,
            timestamp: Date.now(),
            body,
            author
        }



    }

}