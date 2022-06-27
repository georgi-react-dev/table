import React, { useEffect } from "react";
import usePosts from "../../hooks/usePosts";
import GenericTable from "../GenericTable.js/GenericTable";
import { transformPosts } from "../../api/posts/helper";
import useUsers from "../../hooks/useUsers";
import Posts from "../Posts/Posts";
import GenericModal from "../Modal/GenericModal";

function UserPosts({ userId }) {
  return (
    <div data-test="test">
      <Posts userId={userId}/>
    </div>
  );
}

export default UserPosts;
