const OPEN_NEW_POST_FORM = "OPEN_NEW_POST_FORM";
const CANCEL_NEW_POST_FORM = "CANCEL_NEW_POST_FORM";
const SAVE_NEW_POST_FORM = "SAVE_NEW_POST_FORM";


const postFormOpenReducer = (state = false, action) => {

    switch(action.type) {

        case OPEN_NEW_POST_FORM:
        return true

        case CANCEL_NEW_POST_FORM: 
        return false

         case SAVE_NEW_POST_FORM: 
        return false

        default:
        return state
    }
}


export default postFormOpenReducer