const VOTEPOSTDOWN = "VOTEPOSTDOWN";
const VOTEPOSTUP = "VOTEPOSTUP";




const votePostReducer = (state = [], action) => {

    // state is the entire state here, the ids of comments and posts will be properties in the stae

    switch (action.type) {
        case VOTEPOSTUP:{
            const id = action.payload.id;
            let post = state.filter(post => post.id === id)[0]
            post = Object.assign({}, post, { voteTotal: post.voteTotal++ })

            return state.filter(post => post.id === id).concat(post)}


        case VOTEPOSTDOWN:{
            const id = action.payload.id;
            let post = state.filter(post => post.id === id)[0]
            post = Object.assign({}, post, { voteTotal: post.voteTotal-- })

            return state.filter(post => post.id === id).concat(post)}



        default:
            return state
    }
}


export default votePostReducer