const SAVENEWCOMMENT = "SAVENEWCOMMENT";
const SAVEEDITEDCOMMENT = "SAVEEDITEDCOMMENT";
const DELETECOMMENT = "DELETECOMMENT"


const commentReducer = (state = [], action) => {

    // whole state is passed in, the actions are very flat, meaning the payload is not encapsulated into its own property

    const payload = action.payload;

    switch (action.type) {
        case SAVENEWCOMMENT:
            return [...state].concat(action.payload)

        case DELETECOMMENT:

            return state.filter(comment => comment.id !== comment.id)
        case SAVEEDITEDCOMMENT:

            const editedComment = state.filter(comment => comment.id === action.id)[0];
            editedComment.body = payload.body;
            editedComment.author = payload.author;
            editedComment.timestamp = payload.timestamp;
            return state.filter(post => post.id !== action.id).concat(editedComment);


        default:
            return state
    }
}


export default commentReducer