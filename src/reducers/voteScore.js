const VOTEPOSTDOWN = "VOTEPOSTDOWN";
const VOTEPOSTUP = "VOTEPOSTUP";
const VOTECOMMENTUP = "VOTECOMMENTUP";
const VOTECOMMENTDOWN = "VOTECOMMENTDOWN";



const voteScore = (state, action) => {
  
  // state is the entire state here, the ids of comments and posts will be properties in the stae

  switch (action.type) {
     case VOTEPOSTUP || VOTECOMMENTUP:
     const id = action.id
     return {
      ...state,
        [id] : {
        ...state[id],
        voteTotal:++state[id].voteTotal
      }
     }
         
 
     case VOTEPOSTDOWN || VOTECOMMENTDOWN :
       return {
      ...state,
        [id] : {
        ...state[id],
        voteTotal:--state[id].voteTotal
      }
     }
 
     
 
     default:
      return state
    } 
}


export default voteScore






