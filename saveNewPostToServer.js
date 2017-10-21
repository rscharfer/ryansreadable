// does not work


const newPost = {


  id:'asdfds32432',
  timestamp: Date.now(),
  title:'things are great',
  body:'her is why things are great...',
  author:'Ryan Scharfer',
  category:'redux',

};
      // stringify that post
      const stringified = JSON.stringify(newPost);
      // create headers
      const headers = {authorization:'crazypassword', 'Content-Type':'application/json'};
      // make the post to server
      fetch("http://localhost:3001/posts",{
        headers:headers,
        method:'POST',
        body:stringified
        }).then(res=>console.log('response:new post to server',res))






const newPost = {


  id:'asdfds32432',
  timestamp: Date.now(),
  title:'things are great',
  body:'her is why things are great...',
  author:'Ryan Scharfer',
  category:'redux',

};
      // stringify that post
      const stringified = JSON.stringify(newPost);
      // create headers
      const headers = {authorization:'crazypassword', 'Content-Type':'application/json'};
      // make the post to server
      fetch("http://localhost:3001/posts",{
        // headers:headers,
        method:'POST',
        body:stringified
        }).then(res=>console.log('response:new post to server',res))
  