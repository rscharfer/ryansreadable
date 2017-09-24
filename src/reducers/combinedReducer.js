import {combineReducers} from 'redux'
import postReducer from './postReducer.js'
import commentReducer from './commentReducer.js'


export default combineReducers({

	posts : postReducer,
	comments : commentReducer,
	url,
	detailPostId,
	sort,
	postFormOpen,
	postBeingEdited,
	commentBeingEdited
})