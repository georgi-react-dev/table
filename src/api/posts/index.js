export async function fetchPosts() {
  const results = await fetch(`${process.env.REACT_APP_MODE ?  process.env.REACT_APP_API_URL_DEV : 'https://table-nodejs-api.herokuapp.com/api'}/posts`);
  const data = await results.json();
  console.log("POSTS", data.data);
  return data.data;
}
export async function fetchDbPosts() {
  const results = await fetch("https://jsonplaceholder.typicode.com/posts");
  const data = await results.json();
  console.log("POSTS", data);
  return data;
}
export async function fetchPostsByUserId(userId) {
  const results = await fetch(
    `${process.env.REACT_APP_MODE ?  process.env.REACT_APP_API_URL_DEV : 'https://table-nodejs-api.herokuapp.com/api'}/posts/userId/${userId}`
  );
  const data = await results.json();
  console.log("API POSTS BY USER ID", data);
  return data.data;
}

export async function fetchPostById(id) {
  const results = await fetch(
    `https://jsonplaceholder.typicode.com/posts/${id}`
  );
  const data = await results.json();
  console.log("POST BY ID", data);
  return data;
}

export async function fetchCommentsByPostId(id) {
  const results = await fetch(
    `https://jsonplaceholder.typicode.com/posts/${id}/comments`
  );
  const data = await results.json();
  console.log("Comment BY POST ID", data);
  return data;
}

export async function addPost(post) {

  console.log("POST", post )

  const results = await fetch(`${process.env.REACT_APP_MODE ?  process.env.REACT_APP_API_URL_DEV : 'https://table-nodejs-api.herokuapp.com/api'}/posts/save`,{
    method: 'POST',
    headers: {
      'Accept': 'application/json',
      'Content-Type': 'application/json'
    },
    body: JSON.stringify({post:post})
  });
  const data = await results.json();
  console.log("Create post", data);
  return data;
}

export async function addCommentToPost(postId, comment) {

  console.log("POST ID", postId )

  const results = await fetch(`${process.env.REACT_APP_MODE ?  process.env.REACT_APP_API_URL_DEV : 'https://table-nodejs-api.herokuapp.com/api'}/posts/${postId}/comment/save`,{
    method: 'POST',
    headers: {
      'Accept': 'application/json',
      'Content-Type': 'application/json'
    },
    body: JSON.stringify({comment:comment})
  });
  const data = await results.json();
  console.log("Create post", data);
  return data;
}