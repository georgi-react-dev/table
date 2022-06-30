import React, { useEffect } from "react";
import classes from "./Modal.module.css";
import { FaTimesCircle } from "react-icons/fa";
import  ReactDOM  from "react-dom";


const GenericModal = ({
  title,
  children,
  onAccept,
  onReject,
  renderButtons = (onAccept, onReject) => (
    <button
      type="button"
      className="btn btn-secondary"
      data-dismiss="modal"
      onClick={onReject}
    >
      Close
    </button>
  ),
}) => {
  console.log("TITLE ", title);

  return ReactDOM.createPortal(
    <div className={classes.modal} onClick={onReject}>
      <div
        className={classes.modalContent}
        onClick={(e) => e.stopPropagation()}
      >
        <div className={classes.modalHeader}>
          <h2>{title}</h2>
          <button
            type="button"
            className={classes.closeBtn}
            data-dismiss="modal"
            aria-label="Close"
            onClick={onReject}
          >
            <FaTimesCircle />
          </button>
        </div>
        <div className={classes.modalBody}>
          <br></br>

          {children}
        </div>

        <div className={classes.modalFooter}>
          {renderButtons(onAccept, onReject)}
        </div>
      </div>
    </div>,
    document.getElementById('modal-root')
  );
};

export default GenericModal;
