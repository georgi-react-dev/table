import React, { useState, useEffect } from "react";
import usePosts from "../../hooks/usePosts";
import useUsers from "../../hooks/useUsers";
import TableFilter from "../../components/TableFilter/TableFilter";
import GenericTable from "../../components/GenericTable.js/GenericTable";
import { transformPosts } from "../../api/posts/helper";
import { fetchPostById, fetchCommentsByPostId } from "../../api/posts";
import Comments from "../Comments/Comments";
import GenericModal from "../Modal/GenericModal";

function Posts({ userId }) {
  const { posts, getPostsByUserId } = usePosts();
  const { users } = useUsers();
  const [show, setShow] = useState(false);
  const [postId, setPostId] = useState(null);
  const [data, setData] = useState([]);
  const [postComments, setPostComments] = useState(null);

  useEffect(() => {
    if (userId) {
      getPostsByUserId(userId);
    }
  }, [userId]);
  useEffect(() => {
    const fetchData = async () => {
      if(postId) {
        const post = await fetchPostById(postId);
        setData(post);
  
        const comments = await fetchCommentsByPostId(postId);
        console.log(comments);
        // setPost(comments);
        setPostComments(comments);
  
        setShow(true);
      }
    };
    fetchData();
  }, [postId]);

  const onSelectItem = (id) => {
    getPostsByUserId(id);
  };
  const onClick = async (postId) => {
    setPostId(postId);
  };
  if (!posts) {
    return <h1>Loading ...</h1>;
  }

  const theadColumns = ["Title", "Author", "Description"];
  const tbodyPropsFields = ["title", "link", "body"];

  return (
    <section>
      {show}
      {/* <Modal show={show} id={postId} closeModal={() => setShow(false)}/> */}
      {show && (
        <GenericModal
          show={show}
          data={data}
          closeModal={() => setShow(false)}
          buttons={<><button
            type="button"
            className="btn btn-secondary"
            data-dismiss="modal"
            onClick={() => setShow(false)}
          >
            Close
          </button>
          <button type="button" className="btn btn-primary">
            Save changes
          </button></>}
        >
          <Comments data={postComments} />
        </GenericModal>
      )}
      {posts && users && (
        <GenericTable
          tableName={`Posts`}
          theadColumns={theadColumns}
          tbodyProps={transformPosts(posts, users)}
          tbodyPropsFields={tbodyPropsFields}
          onClick={onClick}
        >
          {userId}
          <div
            className={`filter-and-pagination ${!userId ? 'has-filter' : null}`}
          >
            {users.length && !userId && (
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
