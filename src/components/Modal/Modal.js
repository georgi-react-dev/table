import React, { useState, useEffect } from "react";
import { fetchPostById, fetchCommentsByPostId } from "../../api/posts";
import classes from "./Modal.module.css";
import { FaTimesCircle } from "react-icons/fa";
import Comments from "../Comments/Comments";

const Modal = ({ id, show, closeModal, children }) => {
  const [post, setPost] = useState(null);
  const [postComments, setPostComments] = useState(null);
  useEffect(() => {
    const fetchData = async () => {
      const res = await fetchPostById(id);
      // console.log(res);
      setPost(res);

      const comments = await fetchCommentsByPostId(id);
      console.log(comments);
      // setPost(comments);
      setPostComments(comments)
    };
    fetchData();
  }, [id, show]);

  return (
    <>
      {show && (
        <div className={classes.modal} onClick={closeModal}>
          <div
            className={classes.modalContent}
            onClick={(e) => e.stopPropagation()}
          >
            <div className={classes.modalHeader}>
              <h2>{post.title}</h2>
              <button
                type="button"
                className={classes.closeBtn}
                data-dismiss="modal"
                aria-label="Close"
                onClick={closeModal}
              >
                <FaTimesCircle />
              </button>
            </div>
            <div className={classes.modalBody}>
              {post.body}
              <br></br>
              <hr></hr>
              <Comments data={postComments}/>
            </div>
            <div className={classes.modalFooter}>
              <button
                type="button"
                className="btn btn-secondary"
                data-dismiss="modal"
                onClick={closeModal}
              >
                Close
              </button>
              <button type="button" className="btn btn-primary">
                Save changes
              </button>
            </div>
          </div>
        </div>
      )}
    </>
  );
};

export default Modal;
