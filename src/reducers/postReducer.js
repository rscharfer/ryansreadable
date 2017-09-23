const SAVEEDITEDPOST = "SAVEEDITEDPOST";
const SAVENEWPOST = "SAVENEWPOST";
const DELETEPOST = "DELETEPOST";



const postReducer = (state = [], action) => {

   // here we only want to pass in the posts property of the state

    let payload = action.payload;

    switch (action.type) {

        case SAVENEWPOST:
            // return array of new posts 
            const deepCopyPosts = state.map(post=>{return{...post})
            deepCopyPosts.push(action.payload)
            return deepCopyPosts;

        case DELETEPOST:
            const deepCopyPosts = state.map(post=>{return{...post})
            return deepCopyPosts.filter(post=>post.id!==action.id)
            

        case SAVEEDITEDPOST:
            const editedPost = state.posts.filter(post=>post.id===action.id);
            const postCopy = {...editedPost};
            postCopy.title  = payload.title;
            postCopy.body  = payload.body;
            postCopy.author  = payload.author;
            postCopy.timestamp  = payload.timestamp;
            otherPosts = state.posts.filter(post=>post.id!==action.id).map(post=>{...post});
            otherPosts.push(postCopy)

            return otherPosts
            





        default:
            return state
    }
}


export default postReducer