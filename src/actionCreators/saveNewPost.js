import uuid from 'uuid/v1';

const SAVENEWPOST = "SAVENEWPOST"

export default function saveNewPost(title) {

    return {

        type: SAVENEWPOST,
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