import fetch from 'isomorphic-fetch'

function fetchPosts() {

    return dispatch => {

    	const headers = {authorization:'crazypassword'};

        
        return fetch(`http://localhost:3001/posts/`,{headers:headers})
            .then(response => response.json())
            .then(json => dispatch(receivePosts(json)))
    }
}




// a thunk returns a function with dispatch as an argument
