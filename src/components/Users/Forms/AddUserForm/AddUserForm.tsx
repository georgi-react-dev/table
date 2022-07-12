import React, { useState,useEffect,useCallback } from "react";
import { addUser } from "../../../../api/users";
// import classes from "./AddUserForm.module.css";
import { IUser } from '../../../../../types'
interface Props {
  modalClose: () => void,
  shouldSaveUser: boolean
}

const AddUserForm:React.FC<Props> = ({modalClose,shouldSaveUser}) => {
  const [user, setUser] = useState<IUser>({
    name: "",
    username: "",
    email: "",
    company:{
      name:''
    }
  });
  const handleChange = (e:React.ChangeEvent<HTMLInputElement>) => {
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

  const saveUser = useCallback(async() => {
    const res = await addUser(user);
    console.log("res", res)
    modalClose();
  // eslint-disable-next-line react-hooks/exhaustive-deps
  },[modalClose])

  useEffect(() => {
    if(shouldSaveUser) {
      saveUser();
    }
  }, [saveUser,shouldSaveUser])
  
 

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
      </form>
    </div>
  );
}

export default AddUserForm;
