const SAVEEDITEDPOST = "SAVEEDITEDPOST";
const SAVENEWPOST = "SAVENEWPOST";
const DELETEPOST = "DELETEPOST";



const postReducer = (state = [], action) => {

    // here we only want to pass in the posts property of the state

    let payload = action.payload;

    switch (action.type) {

        case SAVENEWPOST:
            return [...state].concat(action.payload)

        case DELETEPOST:
            return state.filter(post => post.id !== action.id)

        case SAVEEDITEDPOST:

            const postToEdit = state.filter(post => post.id === action.id)[0];
            postToEdit.title = payload.title;
            postToEdit.body = payload.body;
            postToEdit.author = payload.author;
            postToEdit.timestamp = payload.timestamp;
            return state.filter(post => post.id !== action.id).concat(postToEdit)


        default:
            return state
    }
}


export default postReducer