export async function fetchUsers() {
  const results = await fetch('http://localhost:8000/api/users');
  const res = await results.json();
  console.log("USERS", res.data);
  return res.data;
};

// export async function fetchUser(id) {
//     const results = await fetch(`https://jsonplaceholder.typicode.com/users/${id}`);
//     const data = await results.json();
//     console.log("USER", data);
//     return data;
// };
export async function fetchUser(id) {

  console.log("ID", id);

  const results = await fetch(`http://localhost:8000/api/users/${id}`);
  const data = await results.json();
  console.log("USER test fetch", data);
  return data;
};
export async function addUser(user) {

  console.log("USER", user)

  const results = await fetch('http://localhost:8000/api/users/save',{
    method: 'POST',
    headers: {
      'Accept': 'application/json',
      'Content-Type': 'application/json'
    },
    body: JSON.stringify({user:user})
  });
  const res = await results.json();
  console.log("ADD USER", res.data);
  return res.data;
};