const EDITPOST = "EDITPOST";
const ADDPOST = "ADDPOST";
const ADDCOMMENT = "ADDCOMMENT";
const EDITCOMMENT = "EDITCOMMENT";
const DELETEPOST = "DELETEPOST";
const DELETECOMMENT = "DELETECOMMENT"


const postReducer = (state, action) => {

    // whole state is passed in, the actions are very flat, meaning the payload is not encapsulated into its own property

    let payload = action.payload;

    switch (action.type) {
        case ADDPOST || ADDCOMMENT:
            return {
                ...state,
                [payload.id]: {...payload}
            }


        case DELETEPOST || DELETECOMMENT:
            let newState = { ...state };
            delete newState[action.id];
            return newState

        case EDITPOST:
            return { ...store,
                [payload.id] = {
                    ...store[payload.id],
                    title: payload.title,
                    body: payload.body,
                    author: payload.author,
                    timestamp: payload.timestamp
                }
            }

        case EDITCOMMENT:
            return { ...state,
                [payload.id] = {
                    ...store[payload.id],
                    body: payload.body,
                    author: payload.author,
                    timestamp: payload.timestamp

                }
            }




        default:
            return state
    }
}


export default postReducer