// logs the posts 
fetch("http://localhost:3001/posts",{headers:{authorization:'crazypassword'}}).then(res=>res.json()).then(data=>console.log(data))



fetch("http://localhost:3001/Angular/posts",{headers:{authorization:'crazypassword'}}).then(res=>res.json()).then(data=>console.log(data))

fetch("http://localhost:3001/React/posts",{headers:{authorization:'crazypassword'}}).then(res=>res.json()).then(data=>console.log(data))


fetch("http://localhost:3001/Javascript/posts",{headers:{authorization:'crazypassword'}}).then(res=>res.json()).then(data=>console.log(data))