const DELETECOMMENT = "DELETECOMMENT"

export default function deleteComment(commentID) {

    return {

        type: DELETECOMMENT,
        payload: {
            post: commentID
        }




    }

}