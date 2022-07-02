import React, { useState, useEffect, useCallback } from "react";
import { addPost } from "../../../../api/posts";
// import classes from "./AddUserForm.module.css";

function CreatePostForm({ userId, modalClose, shouldSavePost }) {
  const [post, setPost] = useState({
    title: "",
    body: "",
    author: userId,
  });
  const handleChange = (e) => {
    if (e.target.name === "company") {
      setPost((oldValues) => ({
        ...oldValues,
        [e.target.name]: { name: e.target.value },
      }));
    } else {
      setPost((oldValues) => ({
        ...oldValues,
        [e.target.name]: e.target.value,
      }));
    }
  };

  const savePost = useCallback(async () => {

    console.log({post})

    const res = await addPost(post);
    console.log("res", res);
    modalClose();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [modalClose]);

  useEffect(() => {
    if (shouldSavePost) {
        savePost();
    }
  }, [savePost, shouldSavePost]);

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
            Title:
            <input
              type="text"
              name="title"
              value={post.title}
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
            Description:
            <textarea
              type="text"
              name="body"
              value={post.body}
              onChange={handleChange}
            ></textarea>
          </label>
        </div>
      </form>
    </div>
  );
}

export default CreatePostForm;