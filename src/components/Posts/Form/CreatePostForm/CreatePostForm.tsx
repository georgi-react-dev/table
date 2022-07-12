import React, { useState, useEffect, useCallback } from "react";
import { addPost } from "../../../../api/posts";
// import classes from "./AddUserForm.module.css";
import TableFilter from "../../../TableFilter/TableFilter";
import useUsers from "../../../../hooks/useUsers";
import {IPost} from '../../../../../types'
interface Props {
  userId: string,
  modalClose: () => {},
  shouldSavePost: boolean
}

const CreatePostForm:React.FC<Props> = ({ userId, modalClose, shouldSavePost }) => {
  const [post, setPost] = useState<IPost>({
    title: "",
    body: "",
    author: userId,
  });

  const {users} = useUsers();

  const handleChange = (e:any) => {
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

  const onSelectItem = (_id:string) => {
    setPost((oldValues) => ({
        ...oldValues,
        'author': _id,
    }));
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
              name="body"
              value={post.body}
              onChange={handleChange}
            ></textarea>
          </label>
          
            {!userId && <TableFilter
                items={users}
                label="Author:"
                selectItem={onSelectItem}
            />}
        </div>
      </form>
    </div>
  );
}

export default CreatePostForm;
