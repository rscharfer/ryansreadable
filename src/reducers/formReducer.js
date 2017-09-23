const OPENPOSTFORMFOREDITING = "OPENPOSTFORMFOREDITING";
const OPENCOMMENTFORMFOREDITING = "OPENCOMMENTFORMFOREDITING";
const OPENNEWPOSTFIELD = "OPENNEWPOSTFIELD";
const POSTFORMCANCELLED = "POSTFORMCANCELLED";
const COMMENTFORMCANCELLED = "COMMENTFORMCANCELLED";




const formReducer = (state,action) => {

	switch(action.type) {

		case OPENPOSTFORMFOREDITING: 
		return {
			...state,
			postBeingEdited : true
		}

		case OPENCOMMENTFORMFOREDITING: 
		return {
			...state,
			commentBeingEdited : true
		}

		case OPENNEWPOSTFIELD:
		return{
			...state,
			postBeingCreated:true
		}

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


export default formReducer