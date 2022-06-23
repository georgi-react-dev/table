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
  }, []);

  const getPostsByUserId = async(id) => {
    setPosts(await fetchPostsByUserId(id));
  }

  return {posts, getPostsByUserId};
}

export default usePosts;
