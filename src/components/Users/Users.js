import React, { useState } from "react";
import GenericTable from "../GenericTable.js/GenericTable";
import useUsers from "../../hooks/useUsers";
import { transformUsers } from "../../api/users/helper";
import GenericModal from "../Modal/GenericModal";
import AddUserForm from "./Forms/AddUserForm/AddUserForm";

function Users() {
  const [show, setShow] = useState(false);
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
    // alert("NEW USER ADDED");
    setShow(true);
  };

  return (
    <section>
      {show && (
        <GenericModal
          show={show}
          title="ADD USER"
          buttons={
            <>
              <button
                type="button"
                className="btn btn-secondary"
                data-dismiss="modal"
                onClick={() => setShow(false)}
              >
                Close
              </button>
              <button type="button" className="btn btn-primary">
                Save
              </button>
            </>
          }
        >
          <AddUserForm modalClose={() => {setShow(false);setRefresh(true)}}/>
        </GenericModal>
      )}
      <GenericTable
        tableName={`Users`}
        theadColumns={theadColumns}
        tbodyProps={transformUsers(users)}
        tbodyPropsFields={tbodyPropsFields}
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
    </section>
  );
}

export default Users;
