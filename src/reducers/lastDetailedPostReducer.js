const GO_TO_POST = "GO_TO_POST";


const lastDetailedPostReducer = (state = {}, action) => {

    

    switch (action.type) {
        case GO_TO_POST:
            return action.payload

  
        default:
            return state
    }
}


export default lastDetailedPostReducer