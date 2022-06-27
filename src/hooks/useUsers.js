import React from "react";
import { useState, useEffect } from "react";
import { fetchUsers } from "../api/users";
function useUsers() {
  const [users, setUsers] = useState([]);
  const [refresh, setRefresh] = useState(false);

  useEffect(() => {
      const getData = async() => {
        setUsers(await fetchUsers());
        setRefresh(false)
      }
     getData();
    
  }, [refresh]);

  return {users, setRefresh};
}

export default useUsers;
