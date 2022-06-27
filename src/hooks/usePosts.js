import React from "react";
import { useState, useEffect } from "react";
import { fetchPosts, fetchPostsByUserId } from "../api/posts";
function usePosts(userId) {
  const [posts, setPosts] = useState([]);

  useEffect(() => {
    const getData = async() => {
      if(userId) {
        setPosts(await fetchPostsByUserId(userId));
      }else{
        setPosts(await fetchPosts());
      }
        
      }
     getData();
  }, [userId]);

  const getPostsByUserId = async(id) => {
    if(id) {
      setPosts(await fetchPostsByUserId(id));
    }
   
  }

  return {posts,setPosts, getPostsByUserId};
}

export default usePosts;
