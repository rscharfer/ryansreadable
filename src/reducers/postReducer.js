const postReducer = (state, action) => {

    // whole state is passed in, the actions are very flat, meaning the payload is not encapsulated into its own property

    switch (action.type) {
        case ADDPOST || ADDCOMMENT:
            let newContent = { ...action };
            delete newContent.type;
            return {
                ...state,
                [action.id]: newContent
            }


        case DELETEPOST || DELETECOMMENT:
            let newState = { ...state };
            delete newState[action.id];
            return newState

        case EDITPOST:
            return { ...store,
                [action.id] = {
                    ...store[action.id],
                    title: action.title,
                    body: action.body,
                    author: action.author,
                    timestamp: action.timestamp
                }
            }

        case EDITCOMMENT:
            return { ...state,
                [action.id] = {
                    ...store[action.id],
                    body: action.body,
                    author: action.author,
                    timestamp: action.timestamp

                }
            }




        default:
            return state
    }
}


export default postReducer