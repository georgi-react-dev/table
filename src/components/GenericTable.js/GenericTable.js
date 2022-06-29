import React from "react";
import { Link } from "react-router-dom";
function GenericTable({
  tableName,
  theadColumns,
  tbodyProps,
  tbodyPropsFields,
  children,
  onClick,
  actions,
  onRemove,
}) {
  // console.log("theadColumns", theadColumns);
  // console.log("tbodyProps", tbodyProps);
  return (
    <div>
      <h1 style={{ margin: "2rem 0" }}>{tableName}</h1>
      {children}
      <table border="1" className="posts">
        <thead>
          <tr>
            {theadColumns?.map((theadColumn) => (
              <td key={theadColumn}>{theadColumn}</td>
            ))}
            <td>Actions</td>
          </tr>
        </thead>
        <tbody>
          {tbodyProps &&
            tbodyProps?.map((tbodyProp, index) => {
              console.log("tbodyProps", tbodyProp);
              return (
                <tr key={tbodyProp?.id} onClick={() => onClick(tbodyProp?.id)}>
                  {tbodyPropsFields?.map((tbodyPropsField) => {
                    if (tbodyPropsField === "link") {
                      return (
                        <td key={tbodyPropsField}>
                          <Link to={tbodyProp[tbodyPropsField][1]}>
                            {tbodyProp[tbodyPropsField][0]}
                          </Link>
                        </td>
                      );
                    }
                    return (
                      <td key={tbodyPropsField}>
                        {tbodyProp[tbodyPropsField]}
                      </td>
                    );
                  })}
                  <td>
                    <div
                      style={{
                        display: "flex",
                        justifyContent: "space-around",
                        padding: "10px",
                        gap: "1rem",
                      }}
                    >
                      <button
                        style={{ width: "100%" }}
                        className="btn btn-primary"
                      >
                        edit
                      </button>
                      <button
                        style={{ width: "100%" }}
                        className="btn btn-danger"
                        onClick={(e) => {
                            onRemove(tbodyProp?._id);
                            e.stopPropagation();
                          }
                        }
                      >
                        delete
                      </button>
                    </div>
                  </td>
                  {/* <td>{props?.authorLink && <Link to={props.authorLink}>{props.author}</Link>}</td>
                  <td>{props.body}</td> */}
                </tr>
              );
            })}
        </tbody>
      </table>
    </div>
  );
}

export default GenericTable;
