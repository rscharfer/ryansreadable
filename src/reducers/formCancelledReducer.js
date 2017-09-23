export default const formCancelledReducer(state,action) => {

	switch(action.type) {

		case POSTFORMCANCELLED: 
		return {
			...state,
			postBeingEdited : false
		}

		case COMMENTFORMCANCELLED: 
		return {
			...state,
			commentBeingEdited : false
		}

		default:
		return state
	}
}