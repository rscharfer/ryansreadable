
export default sortReducer = (state = 'by vote total', action)=> {

	switch(action.type){
		case SET_SORT:
			return action.sort

		default: 
		return state
	}
}