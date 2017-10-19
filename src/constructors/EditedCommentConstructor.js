class EditedCommentConstructor {
  constructor({id, body, author, parentId, voteScore}) {

    this.id = id;
    // this.timestamp = dateFormat(Date.now(), "mmmm dS, yyyy, h:MM:ss TT");
    this.timestamp = Date.now();
    this.body = body;
    this.author = author;
    this.parentId = parentId;
    this.voteScore = voteScore;
    this.deleted = false;
    this.parentDeleted = false;
 
    

  }
}


export default EditedCommentConstructor