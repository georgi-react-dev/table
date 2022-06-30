import React, { useState } from "react";
import GenericTable from "../GenericTable.js/GenericTable";
import useUsers from "../../hooks/useUsers";
import { transformUsers } from "../../api/users/helper";
import GenericModal from "../Modal/GenericModal";
import AddUserForm from "./Forms/AddUserForm/AddUserForm";
import { removeUser } from "../../api/users";

function Users() {
  const [show, setShow] = useState(false);
  const [showConfirm, setShowConfirm] = useState(false);
  const [userIdForDeleting, setUserIdForDeleting] = useState(false);
  const [shouldSaveUser, setShouldSaveUser] = useState(false);
  // "name": "Leanne Graham",
  // "username": "Bret",
  // "email": "Sincere@april.biz",
  // "address": {
  // "street": "Kulas Light",
  // "suite": "Apt. 556",
  // "city": "Gwenborough",
  // "zipcode": "92998-3874",
  // "geo": {
  // "lat": "-37.3159",
  // "lng": "81.1496"
  // }
  // },
  // "phone": "1-770-736-8031 x56442",
  // "website": "hildegard.org",
  // "company": {
  // "name": "Romaguera-Crona",
  // "catchPhrase": "Multi-layered client-server neural-net",
  // "bs": "harness real-time e-markets"
  // }
  const theadColumns = ["Name", "Username", "Email", "Company"];
  const tbodyPropsFields = ["link", "username", "email", "companyName"];
  const { users, setRefresh } = useUsers();

  const addNewUser = () => {
    setShow(true);
  };
  const removeUserById = (id) => {
    setUserIdForDeleting(id);
    setShowConfirm(true);
  };

  const onConfirm = () => {
    removeUser(userIdForDeleting);
    setShowConfirm(false);
    setRefresh(true);
  };

  const onAccept = () => {
    alert("CLICKED");
    setShouldSaveUser(true);
  };

  return (
    <section>
      {show && (
        <GenericModal
          title="ADD USER"
          onAccept={onAccept}
          renderButtons={(onAccept, onReject) => (
            <>
              <button className="btn btn-default" onClick={onReject}>
                Close
              </button>
              <button className="btn btn-primary" onClick={onAccept}>
                Save
              </button>
            </>
          )}
          onReject={() => setShow(false)}
        >
          <AddUserForm
            modalClose={() => {
              setShow(false);
              setRefresh(true);
              setShouldSaveUser(false);
            }}
            shouldSaveUser={shouldSaveUser}
          />
        </GenericModal>
      )}

      <GenericTable
        tableName={`Users`}
        onClick={() => console.log("clicked")}
        theadColumns={theadColumns}
        tbodyProps={transformUsers(users)}
        tbodyPropsFields={tbodyPropsFields}
        onRemove={removeUserById}
      >
        <div className="filter-and-pagination has-filter">
          <button className="btn btn-primary" onClick={addNewUser}>
            Add new user
          </button>
          {/* {users.length && (
              <TableFilter
                items={users}
                label="Users"
                selectItem={onSelectItem}
              />
            )} */}
          <div>Total: {users.length}</div>
        </div>
      </GenericTable>

      {showConfirm && (
        <GenericModal
          title="Delete user"
          onAccept={onConfirm}
          renderButtons={(onAccept, onReject) => (
            <>
              <button className="btn btn-default" onClick={onReject}>
                No
              </button>
              <button className="btn btn-primary" onClick={onAccept}>
                Yes
              </button>
            </>
          )}
          onReject={() => setShowConfirm(false)}
        >
          Are you sure, you want to delete this user ? 
        </GenericModal>
      )}
    </section>
  );
}

export default Users;
