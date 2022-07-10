import React, { Key, useState } from "react";
import classes from "./Comments.module.css";
import LeaveCommentForm from "../LeaveCommentForm/LeaveCommentForm";
import { IComment } from "../../../types";

interface IProps {
  comments: IComment[]
}

const Comments: React.FC<IProps> = (props) => {
  console.log("DATATTATATA", props);

  const [showForm, setShowForm] = useState<boolean>(false)

  return (
    <>
      <h3 style={{marginTop:'2rem'}}>Comments: </h3>
      <div className={classes.commentsWrapper}>
        {props.comments.map((comment:IComment) => {
          const {id, name, body, email} = comment;
          console.log(typeof id);

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
              <h3>{name}</h3>
              <div>{body}</div>
              <i>{email}</i>
            </div>
          );
        })}

        

      </div>
      <button className="btn btn-primary" style={{marginTop:'2rem'}} onClick={() => setShowForm(true)}>Leave comment</button>
      {showForm && <LeaveCommentForm/>}
    </>
  );
}

export default Comments;
