const RECEIVE_POSTS = 'RECEIVE_POSTS'

export default receivePostsReducer = (state,action)=> {

	switch(action.type){
		case RECEIVE_POSTS:
			return {
			...state,
			 posts:action.posts
			}
	}
}