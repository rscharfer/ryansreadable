import uuid from 'uuid/v1'
import dateFormat from 'dateformat'

class PostConstructor {
  constructor({userName,title,category,message}) {

  	this.id = uuid();
  	this.timestamp = dateFormat(Date.now(), "mmmm dS, yyyy, h:MM:ss TT");
    this.author = userName;
    this.title = title;
    this.category = category;
    this.body = message;
    this.voteScore = 1;
	this.deleted = false;
  }
}


export default PostConstructor