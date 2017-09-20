const DELTEPOST = "DELTEPOST"

export default function deletePost(postID) {

    return {

        type: DELTEPOST,
        payload: {
            post: postID
        }




    }

}