import React from "react";
import { useState, useEffect } from "react";
import { fetchUsers } from "../api/users";
function useUsers() {
  const [users, setUsers] = useState([]);

  useEffect(() => {
      const getData = async() => {
        setUsers(await fetchUsers());
      }
     getData();
    
  }, []);

  return {users};
}

export default useUsers;
