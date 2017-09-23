const SAVEEDITEDPOST = "SAVEEDITEDPOST"

export default function saveEditedPost(postID, title, body, author) {

    return {

        type: SAVEEDITEDPOST,
        payload: {
            post: postID,
            timestamp: Date.now(),
            title,
            body,
            author
        }



    }

}