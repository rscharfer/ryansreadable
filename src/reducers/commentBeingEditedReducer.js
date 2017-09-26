const EDIT_COMMENT = "EDIT_COMMENT";
const SAVE_EDITED_COMMENT = "SAVE_EDITED_COMMENT";
const CANCEL_EDITED_COMMENT = "CANCEL_EDITED_COMMENT";



const editCommentReducer = (state = {}, action) => {

    switch(action.type) {

        case EDIT_COMMENT:
        return action.payload

        case SAVE_EDITED_COMMENT:
        return {}

        case CANCEL_EDITED_COMMENT:
        return {}

        default:
        return state
    }
}


export default commentBeingEditedReducer