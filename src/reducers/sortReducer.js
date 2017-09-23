const SORTBYDATE = "SORTBYDATE"
const SORTBYVOTETOTAL = "SORTBYVOTETOTAL"

export default sortReducer = (state,action)=> {

	switch(action.type){
		case SORTBYDATE || SORTBYVOTETOTAL:
			return {
			...state,
			 sort:action.type
			}

		default: 
		return state
	}
}