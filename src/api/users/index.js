export async function fetchUsers() {
  console.log("USERS", process.env);
  const results = await fetch(`${process.env.REACT_APP_MODE ?  process.env.REACT_APP_API_URL_DEV : 'https://table-nodejs-api.herokuapp.com/api'}/users`);
  const res = await results.json();

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

  const results = await fetch(`${process.env.REACT_APP_MODE ?  process.env.REACT_APP_API_URL_DEV : 'https://table-nodejs-api.herokuapp.com/api'}/users/${id}`);
  const data = await results.json();
  console.log("USER test fetch", data);
  return data;
};
export async function addUser(user) {

  console.log("USER", user)

  const results = await fetch(`${process.env.REACT_APP_MODE ?  process.env.REACT_APP_API_URL_DEV : 'https://table-nodejs-api.herokuapp.com/api'}/users/save`,{
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

export async function removeUser(userId) {

  console.log("USER", userId)

  const results = await fetch(`${process.env.REACT_APP_MODE ?  process.env.REACT_APP_API_URL_DEV : 'https://table-nodejs-api.herokuapp.com/api'}/users/${userId}`,{
    method: 'DELETE',
    headers: {
      'Accept': 'application/json',
      'Content-Type': 'application/json'
    },
  });
  const res = await results.json();
  console.log("remove USER", res.data);
  return res.data;
};