import uuid from 'uuid/v1';

const ADDPOST = "ADDPOST"

export default function addPost(title) {

    return {

        type: ADDPOST,
        payload: {
            id: uuid(),
            timestamp: Date.now(),
            title: title,
            category: category,
            body: body,
            voteScore: 0
        }


    }

}




// this action creater creates an action with the necessary info
// does this