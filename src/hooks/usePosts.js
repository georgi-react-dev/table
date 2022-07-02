import React from "react";
import { useState, useEffect } from "react";
import { fetchPosts, fetchPostsByUserId } from "../api/posts";
function usePosts(userId) {
  const [posts, setPosts] = useState([]);
  const [refresh, setRefresh] = useState(false);
  
  useEffect(() => {
    const getData = async() => {
      if(userId) {
        setPosts(await fetchPostsByUserId(userId));
      }else{
        setPosts(await fetchPosts());
      }
      setRefresh(false)
      }
     getData();
  }, [refresh,userId]);

  // useEffect(() => {
  //    (async() => {
  //     if(userId) {
  //       setPosts(await fetchPosts());
  //     }
        
       
  //     })();
    
  // }, [refresh,userId]);

  const getPostsByUserId = async(id) => {
    if(id) {
      setPosts(await fetchPostsByUserId(id));
    }
   
  }

  return {posts,setPosts, getPostsByUserId, setRefresh};
}

export default usePosts;
