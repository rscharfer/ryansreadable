export const RECEIVE_POSTS = 'RECEIVE_POSTS'

function receivePosts(json) {
  console.log('Here is the data received and passed into the action creater', json)
  return {
    type: RECEIVE_POSTS,
    posts: json.data.children.map(child => child.data),
    receivedAt: Date.now()
  }
}




// this action creater creates an action with the necessary info
// does this