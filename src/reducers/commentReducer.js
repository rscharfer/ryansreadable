const SAVENEWCOMMENT = "SAVENEWCOMMENT";
const SAVEEDITEDCOMMENT = "SAVEEDITEDCOMMENT";
const DELETECOMMENT = "DELETECOMMENT"


const commentReducer = (state = [], action) => {

    // whole state is passed in, the actions are very flat, meaning the payload is not encapsulated into its own property

    const payload = action.payload;

    switch (action.type) {
        case SAVENEWCOMMENT:
            {
                const deepCopyComments = state.map(
                    comment => {
                        return { ...comment }
                    })
                deepCopyComments.push(action.payload)
                return deepCopyComments
            }
        case DELETECOMMENT:
            {
                const deepCopyComments = state.map(comment => { return { ...comment } })
                return deepCopyComments.filter(comment => comment.id !== action.id)

            }
        case SAVEEDITEDCOMMENT:
            {
                const editedComment = state.posts.filter(post => post.id === action.id);
                const commentCopy = { ...editedComment };
                commentCopy.body = payload.body;
                commentCopy.author = payload.author;
                commentCopy.timestamp = payload.timestamp;
                otherComments = state.posts.filter(post => post.id !== action.id).map(post => { return { ...post } });
                otherComments.push(commentCopy)

                return otherComments
            }
        default:
            return state
    }
}


export default commentReducer