import { combineReducers } from 'redux'



function selectedView(state = 'all', action) {
    switch (action.type) {
        case "SELECT_VIEW":
            return action.view
        default:
            return state
    }
}


function sortType(state = 'byDate', action) {

    switch (action.type) {
        case "SORT_BY_DATE":
            return 'byDate'
        case "SORT_BY_VOTE_TOTAL":
            return 'byVoteTotal'
        default:
            return state
    }

}


// function sortTypePosts(state='byDate', action){

//   switch (action.type) {
//     case "SELECT_VIEW":
//       return action.sort
//     default:
//       return state
//   }

// }

function commentIsBeingEdited(state = false, action) {

    switch (action.type) {

        case "SHOW_POPULATED_COMMENT_FORM":

            return true;

        case "SHOW_POPULATED_POST_FORM":

            return false;

        case "SAVE_EDITED_COMMENT_TO_STORE":
            return false;

        default:

            return state

    }




}




function commentWhichIsBeingEdited(state = null, action) {

    switch (action.type) {

        case "SHOW_POPULATED_COMMENT_FORM":

            console.log('show populated comment form action was received', action.comment)

            return action.comment;

        case "SHOW_POPULATED_POST_FORM":

            return null;


        case "SAVE_EDITED_COMMENT_TO_STORE":
            return null;




        default:

            return state;

    }



}


function postFormIsShown(state=false,action){


    switch(action.type){

        case "OPEN_POST_FORM":
        return true;

        case "CLOSE_POST_FORM":

        return false;

        default:
        return state;
    }
}

function postFormIsEmpty(state=true,action){


    switch(action.type){

        case "POPULATE_POST_FORM":
        return false

        case "CLOSE_POST_FORM":
        return true
        default:
        return state;

 
    }
}


function postBeingEdited(state=null,action){


    switch(action.type){

        case "POPULATE_POST_FORM":
        return action.post

        case "CLOSE_POST_FORM":
        return null

        
        default:
        return state;

 
    }
}

function entities(
    state = {
        posts: {},
        comments: {}

    },
    action
) {

    switch (action.type) {

        case "SAVE_NEW_POST_TO_STORE":
            {


                const postId = action.post.id

                const postsCopy = Object.assign({}, state.posts)
                postsCopy[postId] = action.post

                return Object.assign({}, state, {

                    posts: postsCopy
                })
            }

        case "SAVE_NEW_COMMENT_TO_STORE":
            {
                const id = action.comment.id
                const commentsCopy = state.comments;
                commentsCopy[id] = action.comment

                return Object.assign({}, state, {

                    comments: commentsCopy
                })
            }

        case "SAVE_EDITED_POST_TO_STORE":
            {


                const postsCopy = Object.assign({}, state.posts, {

                    [action.newPost.id]: action.newPost
                })

                return Object.assign({}, state, {

                    posts: postsCopy
                })

            }


        case "SAVE_EDITED_COMMENT_TO_STORE":

            console.log('save edited comment to store is called', action.comment)
            {

              const editedComments = Object.assign({},state.comments,{

                [action.comment.id] : action.comment
              })

              return Object.assign({},state,{
                comments:editedComments
              })

            }


        case "REMOVE_POST_FROM_STORE":
            {
                let newStore = Object.assign({}, state);

                for (let commentID in newStore.comments) {
                    if (newStore.comments[commentID].parentId === action.id) delete newStore.comments[commentID]
                }
                delete newStore.posts[action.id];
                return newStore;
            }



        case "REMOVE_COMMENT_FROM_STORE":
            {
                let newStore = Object.assign({}, state);
                delete newStore.comments[action.id];
                return newStore;
            }

        case "VOTE_UP_ON_STORE":
            {


                if (action.isComment) {
                    for (let comment in state.comments) {
                        if (comment === action.id) state.comments[comment].voteScore++
                    }
                } else {
                    for (let post in state.posts) {
                        if (post === action.id) state.posts[post].voteScore++
                    }
                }

                return Object.assign({}, state)

            }

        case "VOTE_DOWN_ON_STORE":
            {


                if (action.isComment) {
                    for (let comment in state.comments) {
                        if (comment === action.id) state.comments[comment].voteScore--
                    }
                } else {
                    for (let post in state.posts) {
                        if (post === action.id) state.posts[post].voteScore--
                    }
                }

                return Object.assign({}, state)

            }


        case "RECEIVE_POSTS":

            return Object.assign({}, state, {

                posts: action.posts.reduce((result, post, index) => {
                    result[post.id] = post;
                    return result
                }, {}),



            })
        case "RECEIVE_COMMENTS":
            return Object.assign({}, state, {


                comments: action.comments

            })
        case "COMMENTS_RECEIVED":
            const origComments = state.comments;

            action.comments.forEach(comment => {
                origComments[comment.id] = comment
            })
            return Object.assign({}, state, {
                comments: origComments
            })
        default:
            return state
    }
}

function postsByCategory(state = {
    react: [],
    redux: [],
    udacity: []
}, action) {
    switch (action.type) {

        case "REMOVE_POST_FROM_STORE":
            let orig = state[action.category]
            orig.splice(orig.indexOf(action.id), 1)
            return Object.assign({}, state, {
                [action.category]: orig
            })

        case "SAVE_NEW_POST_TO_STORE":
            const cat = action.post.category;
            const id = action.post.id;
            console.log('her is the post', action.post);
            return Object.assign({}, state, {
                [cat]: state[cat].concat(id)
            })



        case "RECEIVE_POSTS":
            return Object.assign({}, state, {
                react: action.posts.reduce((result, post) => {
                    if (post.category === "react") result.push(post.id)
                    return result
                }, []),
                redux: action.posts.reduce((result, post) => {
                    if (post.category === "redux") result.push(post.id)
                    return result
                }, []),
                udacity: action.posts.reduce((result, post) => {
                    if (post.category === "udacity") result.push(post.id)
                    return result
                }, []),
            })
        default:
            return state
    }
}

const rootReducer = combineReducers({
    selectedView,

    sortType,
    entities,
    postsByCategory,
    commentIsBeingEdited,
    commentWhichIsBeingEdited,
    postFormIsShown,
    postFormIsEmpty,
    postBeingEdited

})

export default rootReducer