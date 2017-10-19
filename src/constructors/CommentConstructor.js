import uuid from 'uuid/v1'

class CommentConstructor {
  constructor({message, userName, parentId}) {

  	this.id = uuid();
  	this.timestamp = Date.now();
    this.body = message;
    this.author = userName;
    this.parentId = parentId;
    this.voteScore = 0;
    this.deleted = false;
    this.parentDeleted = false;
 
    

  }
}


export default CommentConstructor