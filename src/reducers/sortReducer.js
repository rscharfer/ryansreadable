const SET_SORT = "SET_SORT"


const sortReducer = (state = 'by vote total', action)=> {

	switch(action.type){
		case SET_SORT:
			return action.sort

		default: 
		return state
	}
}



export default sortReducer