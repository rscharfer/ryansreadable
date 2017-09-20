const EDITPOST = "EDITPOST"

export default function editPost(postID, title, body, author) {

    return {

        type: EDITPOST,
        payload: {
            post: postID,
            timestamp: Date.now(),
            title,
            body,
            author
        }



    }

}