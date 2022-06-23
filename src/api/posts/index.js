export async function fetchPosts() {
  const results = await fetch("https://jsonplaceholder.typicode.com/posts");
  const data = await results.json();
  console.log("POSTS", data);
  return data;
}

export async function fetchPostsByUserId(id) {
  const results = await fetch(
    `https://jsonplaceholder.typicode.com/posts?userId=${id}`
  );
  const data = await results.json();
  console.log("POSTS BY USER ID", data);
  return data;
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
