const SAVEEDITEDPOST = "SAVEEDITEDPOST";
const SAVENEWPOST = "SAVENEWPOST";
const SAVENEWCOMMENT = "SAVENEWCOMMENT";
const SAVEEDITEDCOMMENT = "SAVEEDITEDCOMMENT";
const DELETEPOST = "DELETEPOST";
const DELETECOMMENT = "DELETECOMMENT"


const postReducer = (state, action) => {

    // whole state is passed in, the actions are very flat, meaning the payload is not encapsulated into its own property

    let payload = action.payload;

    switch (action.type) {
        case SAVENEWPOST || SAVENEWCOMMENT:
            return {
                ...state,
                [payload.id]: {...payload}
            }


        case DELETEPOST || DELETECOMMENT:
            let newState = { ...state };
            delete newState[action.id];
            return newState

        case SAVEEDITEDPOST:
            return { ...store,
                [payload.id] = {
                    ...store[payload.id],
                    title: payload.title,
                    body: payload.body,
                    author: payload.author,
                    timestamp: payload.timestamp
                }
            }

        case SAVEEDITEDCOMMENT:
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