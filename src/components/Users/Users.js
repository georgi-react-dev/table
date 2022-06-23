import React from "react";
import GenericTable from "../GenericTable.js/GenericTable";
import useUsers from "../../hooks/useUsers";
import { transformUsers } from "../../api/users/helper";

function Users() {
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
  const { users } = useUsers();
  return (
    <section>
      <GenericTable
        tableName={`Users`}
        theadColumns={theadColumns}
        tbodyProps={transformUsers(users)}
        tbodyPropsFields={tbodyPropsFields}
      >
          <div className="filter-and-pagination hasFilter">
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
