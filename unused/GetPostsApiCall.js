// logs the posts 
fetch("http://localhost:3001/posts",{headers:{authorization:'crazypassword'}}).then(res=>res.json()).then(data=>console.log(data))



fetch("http://localhost:3001/Angular/posts",{headers:{authorization:'crazypassword'}}).then(res=>res.json()).then(data=>console.log(data))

fetch("http://localhost:3001/React/posts",{headers:{authorization:'crazypassword'}}).then(res=>res.json()).then(data=>console.log(data))


fetch("http://localhost:3001/Javascript/posts",{headers:{authorization:'crazypassword'}}).then(res=>res.json()).then(data=>console.log(data))


fetch("http://localhost:3001/posts/8xf0y6ziyjabvozdd253nd",
	 {
	 	headers:{authorization:'crazypassword', 'content-type':'application/json'},
	 	method:'POST',
	 	body:JSON.stringify(
	 	{option:'upVote'}
	 	)
	 }
	 ).then(res=>res.json()).then(json=>console.log(json));