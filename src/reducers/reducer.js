import postReducer from './postReducer.js'
import commentReducer from './commentReducer.js'
import sortReducer from './sortReducer.js'
import postFormOpenReducer from './postFormOpenReducer.js'
import commentBeingEditedReducer from './commentBeingEditedReducer.js'
import postBeingEditedReducer from './postBeingEditedReducer.js'
import lastDetailedPostReducer from './lastDetailedPostReducer.js'



// export default combineReducers({

// 	posts : postReducer,
// 	comments : commentReducer,
//
// 	detailPostId,
// 	sort : sortReducer,
// 	postFormOpen: postFormOpenReducer,
// 	editComment:
//	editPost:
// })


function reducer (state,action){

	return {

		posts:postReducer(state.posts,action),
		comments: commentReducer(state.comments,action),
		sort: sortReducer(state.sort,action),
		commentBeingEdited: commentBeingEditedReducer(state.commentBeingEdited,action), // EDIT_COMMENT, SAVE_EDITED_COMMMENT, CANCEL_EDITED_COMMENT
		postBeingEdited: postBeingEditedReducer(state.postBeingEdited,action), //  EDIT_POST, SAVE_EDITED_POST, CANCEL_EDITED_POST
		postFormOpen: postFormOpenReducer(state.postFormOpen,action),  // OPEN_NEW_POST_FORM, SAVE_NEW_POST_FORM, CANCEL_NEW_POST_FORM
	  	lastDetailedPost: lastDetailedPostReducer(state.lastDetailedPost,action)

		


	}
	
	
}


export default reducer