import {combineReducers} from 'redux'
import postReducer from './postReducer.js'
import commentReducer from './commentReducer.js'
import sortReducer from './sortReducer.js'



// export default combineReducers({

// 	posts : postReducer,
// 	comments : commentReducer,
// 	url,
// 	detailPostId,
// 	sort : sortReducer,
// 	postFormOpen,
// 	postBeingEdited,
// 	commentBeingEdited
// })


function reducer (state,action){

	return {

		posts:postReducer(state.posts,action),
		comments: commentReducer(state.comments,action),
		sort: sortReducer(state.sort,action),


	}
	
	
}