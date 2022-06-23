import React, { useEffect } from "react";
import usePosts from "../../hooks/usePosts";
import GenericTable from "../GenericTable.js/GenericTable";
import { transformPosts } from "../../api/posts/helper";
import useUsers from "../../hooks/useUsers";
function UserPosts({ userId }) {
  const { posts, getPostsByUserId } = usePosts();
  const { users } = useUsers();
  useEffect(() => {
    getPostsByUserId(userId);
  }, [userId]);

  //   const onSelectItem = (id) => {

  //   };

  if (!posts) {
    return <h1>Loading ...</h1>;
  }

  const theadColumns = ["Title", "Author", "Description"];
  const tbodyPropsFields = ["title", "link", "body"];

  return (
    <div>
      <GenericTable
        tableName={`Posts`}
        theadColumns={theadColumns}
        tbodyProps={transformPosts(posts, users)}
        tbodyPropsFields={tbodyPropsFields}
      >
        <div className="filter-and-pagination">
          {/* {users.length && (
          <TableFilter
            items={users}
            label="Users"
            selectItem={onSelectItem}
          />
        )} */}
          <div>Total: {posts.length}</div>
        </div>
      </GenericTable>
    </div>
  );
}

export default UserPosts;
