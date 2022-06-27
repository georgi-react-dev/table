import React, { useState } from "react";
import { addUser } from "../../../../api/users";
import classes from "./AddUserForm.module.css";

function AddUserForm({modalClose}) {
  const [user, setUser] = useState({
    name: "",
    username: "",
    email: "",
    company:{
      name:''
    }
  });
  const handleChange = (e) => {
    if(e.target.name === 'company') {
      setUser((oldValues) => ({
        ...oldValues,
        [e.target.name]:{name: e.target.value},
      }));
    }else{
      setUser((oldValues) => ({
        ...oldValues,
        [e.target.name]: e.target.value,
      }));
    }
    
  };

  const saveUser = async(e) => {
    e.preventDefault();
    const res = await addUser(user);
    console.log("res", res)
    modalClose();
  }

  return (
    <div>
      <form>
        <div
          style={{
            display: "flex",
            flexDirection: "column",
            gap: ".5rem",
            marginTop: "1rem",
          }}
        >
          <label
            style={{
              display: "flex",
              justifyContent: "space-between",
              width: "250px",
            }}
          >
            {" "}
            Name:
            <input
              type="text"
              name="name"
              value={user.name}
              onChange={handleChange}
            ></input>
          </label>
          <label
            style={{
              display: "flex",
              justifyContent: "space-between",
              width: "250px",
            }}
          >
            {" "}
            Username:
            <input
              type="text"
              name="username"
              value={user.username}
              onChange={handleChange}
            ></input>
          </label>
          <label
            style={{
              display: "flex",
              justifyContent: "space-between",
              width: "250px",
            }}
          >
            Email :
            <input
              type="text"
              name="email"
              value={user.email}
              onChange={handleChange}
            ></input>
          </label>
          <label
            style={{
              display: "flex",
              justifyContent: "space-between",
              width: "250px",
            }}
          >
            Company :
            <input
              type="text"
              name="company"
              value={user.company.name}
              onChange={handleChange}
            ></input>
          </label>
        </div>
        <div className={classes.formButtons}>
          {" "}
          <button className="btn btn-primary" onClick={saveUser}>Save</button>
        </div>
      </form>
    </div>
  );
}

export default AddUserForm;
