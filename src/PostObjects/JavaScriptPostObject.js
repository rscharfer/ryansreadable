import uuid from 'uuid/v1'

const jsPostObject =  {

	id:uuid(),
	timestamp: Date.now(),
	title: 'Angulars best feature',
	body:'blah blah blah',
	author:'JS guy',
	category:'Angular',
	voteScore:1,
	deleted:false

}


export default jsPostObject;