const Confirm = ({
    children,
    onAccept,
    onReject,
    renderButtons = (onAccept, onReject) => (
      <>
        <button className="btn btn-primary" onClick={onAccept}>
          OK
        </button>
        <button className="btn btn-danger" onClick={onReject}>
          Cancel
        </button>
      </>
    ),
  }) => (
    <div className="confirm">
      <div className="confirm-header">
        <h1>Confirm</h1>
      </div>
      <div className="confirm-content">{children}</div>
      <div className="confirm-footer">{renderButtons(onAccept, onReject)}</div>
    </div>
  );


  export default Confirm