export async function fetchUsers() {
  const results = await fetch('http://localhost:8000/api/users');
  const res = await results.json();
  console.log("USERS", res.data);
  return res.data;
};

export async function fetchUser(id) {
    const results = await fetch(`https://jsonplaceholder.typicode.com/users/${id}`);
    const data = await results.json();
    console.log("USER", data);
    return data;
  };