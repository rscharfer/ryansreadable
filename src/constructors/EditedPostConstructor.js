import dateFormat from 'dateformat'

class EditedPostConstructor {
  constructor({id,userName,title,category,message,voteScore}) {

  	this.id = id
  	// this.timestamp = dateFormat(Date.now(), "mmmm dS, yyyy, h:MM:ss TT");
  	this.timestamp = Date.now();
    this.author = userName;
    this.title = title;
    this.category = category;
    this.body = message;
    this.voteScore = voteScore;
	this.deleted = false;
  }
}


export default EditedPostConstructor