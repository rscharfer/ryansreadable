import fetch from 'isomorphic-fetch'

function fetchPosts() {

    return dispatch => {

    	const headers = {authorization:'crazypassword'};

        
        return fetch(`http://localhost:3001/posts/`,{headers:headers})
            .then(response => response.json())
            .then(json => dispatch(receivePosts(json)))
    }
}




 // const url = 'http://localhost:3001/posts/'+this.state.postID+'/comments';
  //  const headers = {authorization:'crazypassword'};
    // fetch(url,{headers:headers}).then(resp=>resp.json()).then(json=>this.setState({comments:json}));