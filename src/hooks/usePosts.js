import React from "react";
import { useState, useEffect } from "react";
import { fetchPosts, fetchPostsByUserId } from "../api/posts";
function usePosts() {
  const [posts, setPosts] = useState([]);

  useEffect(() => {
    const getData = async() => {
        setPosts(await fetchPosts());
      }
     getData();
  }, [setPosts]);

  const getPostsByUserId = async(id) => {
    setPosts(await fetchPostsByUserId(id));
  }

  return {posts,setPosts, getPostsByUserId};
}

export default usePosts;
