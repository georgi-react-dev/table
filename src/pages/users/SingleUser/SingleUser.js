import React, { useState, useEffect } from "react";
import { Routes, Route, useParams } from "react-router-dom";
import { fetchUser } from "../../../api/users";
import classes from "./SingleUser.module.css";
import { FaPhone, FaEnvelope, FaLocationArrow } from "react-icons/fa";
import GoogleMap from "../../../components/GoogleMap/GoogleMap";
import UserPosts from "../../../components/Users/UserPosts";

function SingleUser() {
  let params = useParams();
  const [user, setUser] = useState();
 // console.log("params", params.userId);
  const [userImage, setUserImage] = useState()
  useEffect(() => {
    const getUser = async () => {
      setUser(await fetchUser(params.userId));
      const results = await fetch(`https://randomuser.me/api/`);
      const data = await results.json();
      //("USER IMAGE", data.results[0].picture);
      // return data;
      setUserImage(data.results[0].picture.large);

    };
    getUser();

    
    // 

  }, [params.userId]);
  if (!user) {
    return <h1>Loading ...</h1>;
  }
  return (
    <div>
      <div className={classes.userCard}>
      <div className={classes.title}>
        <div className={classes.imgContainer}>
          <img src={userImage ? userImage : `http://placehold.jp/150x150.png`} alt="" />
        </div>

        <div style={{ flex: 3, textAlign: "left" }}>
          <h1>{user.name}</h1>
          <h3>
            Username: <i>{user.username}</i>
          </h3>
          <h3>
            Company: <i>{user.company.name}</i>
          </h3>
        </div>
      </div>

      <div style={{display:'flex',    gap: '.5rem'}}>
        <div className={classes.info}>
          <div>
            <FaPhone /> {user.phone}
          </div>
          <div>
            <FaEnvelope />
            {user.email}
          </div>
          <div>
            <FaLocationArrow />
            {user.address.city}, {user.address.street}, {user.address.suite}
          </div>
        </div>
        <div className={classes.map}>
            {/* <GoogleMap/> */}
        </div>
      </div>
      
    </div>
      {params.userId && <UserPosts userId={params.userId}/>}
    </div>
    
  );
}

export default SingleUser;
