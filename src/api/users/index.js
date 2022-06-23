export async function fetchUsers() {
  const results = await fetch("https://jsonplaceholder.typicode.com/users");
  const data = await results.json();
  console.log("USERS", data);
  return data;
};

export async function fetchUser(id) {
    const results = await fetch(`https://jsonplaceholder.typicode.com/users/${id}`);
    const data = await results.json();
    console.log("USER", data);
    return data;
  };