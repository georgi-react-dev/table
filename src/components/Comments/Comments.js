import React from "react";
import classes from "./Comments.module.css";

function Comments({ data }) {
  return (
    <>
      <h3 style={{marginTop:'2rem'}}>Comments: </h3>
      <div className={classes.commentsWrapper}>
        {data.map(({ id, name: commentName, body, email }) => {
          return (
            <div
              key={id}
              style={{
                display: "flex",
                flexDirection: "column",
                gap: "1rem",
                border: "0.5px solid rgb(215 215 215)",
                padding: "1rem",
              }}
            >
              <h3>{commentName}</h3>
              <div>{body}</div>
              <i>{email}</i>
            </div>
          );
        })}
      </div>
    </>
  );
}

export default Comments;
