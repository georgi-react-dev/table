import React from "react";
import usePosts from "../../hooks/usePosts";
import useUsers from "../../hooks/useUsers";
import TableFilter from "../../components/TableFilter/TableFilter";
import { Link } from "react-router-dom";
import GenericTable from "../../components/GenericTable.js/GenericTable";
import { transformPosts } from "../../api/posts/helper";

function Posts() {
  const { posts, getPostsByUserId } = usePosts();
  const { users } = useUsers();

  const onSelectItem = (id) => {
    getPostsByUserId(id);
  };
  const onClick = (postId) => {
    // showModal(true);
    alert(postId);
  }
  if (!posts) {
    return <h1>Loading ...</h1>;
  }

  const theadColumns = ["Title", "Author", "Description"];
  const tbodyPropsFields = ["title", "link", "body", ];

  return (
    <section>
      {posts && users && (
        <GenericTable
          tableName={`Posts`}
          theadColumns={theadColumns}
          tbodyProps={transformPosts(posts, users)}
          tbodyPropsFields={tbodyPropsFields}
          onClick={onClick}
        >
          <div className="filter-and-pagination has-filter">
            {users.length && (
              <TableFilter
                items={users}
                label="Users"
                selectItem={onSelectItem}
              />
            )}
            <div>Total: {posts.length}</div>
          </div>
        </GenericTable>
      )}
    </section>
  );
}

export default Posts;
