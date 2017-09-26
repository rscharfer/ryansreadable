const VOTE_COMMENT_DOWN = "VOTE_COMMENT_DOWN";
const VOTE_COMMENT_UP = "VOTE_COMMENT_UP";




const voteCommentReducer = (state = [], action) => {

    // state is the entire state here, the ids of comments and posts will be properties in the stae

    switch (action.type) {
        case VOTE_COMMENT_UP:{
            const id = action.payload.id;
            let comment = state.filter(comment => comment.id === id)[0]
            comment = Object.assign({}, comment, { voteTotal: comment.voteTotal++ })

            return state.filter(comment => comment.id === id).concat(comment)}


        case VOTE_COMMENT_DOWN:{
            const id = action.payload.id;
            let comment = state.filter(comment => comment.id === id)[0]
            comment = Object.assign({}, comment, { voteTotal: comment.voteTotal-- })

            return state.filter(comment => comment.id === id).concat(comment)}



        default:
            return state
    }
}


export default voteCommentReducer