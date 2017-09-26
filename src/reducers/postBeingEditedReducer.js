const EDIT_POST = "EDIT_POST";
const SAVE_EDITED_POST = "SAVE_EDITED_POST";
const CANCEL_EDITED_POST = "CANCEL_EDITED_POST";



const postBeingEditedReducer = (state = {}, action) => {

    switch(action.type) {

        case EDIT_POST:
        return action.payload

        case SAVE_EDITED_POST:
        return {}

        case CANCEL_EDITED_POST:
        return {}

        default:
        return state
    }
}


export default postBeingEditedReducer