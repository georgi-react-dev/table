import React, { useEffect } from "react";
import Posts from "../Posts/Posts";

interface Props {
  userId:number
}

const UserPosts:React.FC<Props> = ({ userId }) => {
  return (
    <div data-test="test">
      <Posts userId={userId}/>
    </div>
  );
}

export default UserPosts;
