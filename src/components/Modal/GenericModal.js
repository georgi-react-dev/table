import React, { useEffect } from "react";
import classes from "./Modal.module.css";
import { FaTimesCircle } from "react-icons/fa";

const GenericModal = ({ show, closeModal, title,body, children, data, buttons }) => {
  console.log("TITLE ", title);

//   useEffect(() => {
        
//     let btn = document.getElementById("test");

//     console.log("BTN", btn);
//     if(btn) {
//         btn.addEventListener("click", () => closeModal);
//     }
    
//   }, [closeModal]);

  return (
    <>
      {show && (
        <div className={classes.modal} onClick={closeModal}>
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
                onClick={closeModal}
              >
                <FaTimesCircle />
              </button>
            </div>
            <div className={classes.modalBody}>
              {body}
              <br></br>
              <hr></hr>
              {children}
            </div>

            {/* <div className={classes.modalFooter}>{buttons}</div> */}
          </div>
        </div>
      )}
    </>
  );
};

export default GenericModal;
