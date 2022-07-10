import React, { useState, useEffect } from "react";
import usePosts from "../../hooks/usePosts";
import useUsers from "../../hooks/useUsers";
import TableFilter from "../../components/TableFilter/TableFilter";
import GenericTable from "../../components/GenericTable.js/GenericTable";
import { transformPosts } from "../../api/posts/helper";
import { fetchPostById, fetchCommentsByPostId } from "../../api/posts";
import Comments from "../Comments/Comments";
import GenericModal from "../Modal/GenericModal";
import { useParams } from "react-router-dom";
import CreatePostForm from "./Form/CreatePostForm/CreatePostForm";
import { addCommentToPost } from "../../api/posts";

function Posts({ userId }) {
  const { posts, getPostsByUserId, setRefresh } = usePosts(userId);
  const { users } = useUsers();
  const [show, setShow] = useState(false);
  const [postId, setPostId] = useState(null);
  const [data, setData] = useState([]);
  const [postComments, setPostComments] = useState(null);
  const [showCreatePostModal, setShowCreatePostModal] = useState(false)
  const [shouldSavePost, setShouldSavePost] = useState(false)
  // console.log("INITIAL POSTS 1", posts);

  const params = useParams();

  // console.log("PARAMS", Object.keys(params)[0] === 'userId');
  // useEffect(() => {
  //   if (userId) {
  //     getPostsByUserId(userId);
  //   }
  // }, [userId]);
  useEffect(() => {
    const fetchData = async () => {
      if (postId) {
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
    if(!id) setRefresh(true);
    else getPostsByUserId(id);
  };
  const onClick = async (postId) => {
    setPostId(postId);
  };
  // console.log("INITIAL POSTS", posts);
  if (!posts) {
    return <h1>Loading ...</h1>;
  }
  const saveComment = (postId) => {
    addCommentToPost(postId, {
      body:'test',
      name:'test',
      email:'test@gmail.com'
    })
  }
  const theadColumns = ["Title", "Author", "Description"];
  const tbodyPropsFields = ["title", "link", "body"];

  return (
    <>
      <section>
        {show && (
          <GenericModal
            show={show}
            title={data.title}
            body={data.body}
            data={data}
            onReject={() => setShow(false)}
          >
            <>
              {data.body}
              <Comments data={postComments} />
            </>
          </GenericModal>
        )}
        {showCreatePostModal && (
          <GenericModal
            title="Create post"
            body={data.body}
            data={data}
            onReject={() => setShowCreatePostModal(false)}
            renderButtons={(onAccept, onReject) => (
              <>
                <button className="btn btn-default" onClick={onReject}>
                  Close
                </button>
                <button className="btn btn-primary" onClick={() => setShouldSavePost(true)}>
                  Create
                </button>
              </>
            )}
          >
            <>
            <CreatePostForm userId={params.userId} modalClose={() => {
            setShowCreatePostModal(false);
            setRefresh(true);
            setShouldSavePost(false);
          }} shouldSavePost={shouldSavePost}/>
            </>
          </GenericModal>
        )}
          <GenericTable
            tableName={`Posts`}
            theadColumns={theadColumns}
            tbodyProps={posts ? transformPosts(posts) : []}
            tbodyPropsFields={tbodyPropsFields}
            onClick={onClick}
            onEdit={saveComment}
          >
            <div
              className={`filter-and-pagination ${
                !userId || Object.keys(params)[0] === 'userId' ? "has-filter" : null
              }`}
            >
              <button className="btn btn-primary" onClick={() => setShowCreatePostModal(true)}>
                Create post
              </button>
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
      </section>
    </>
  );
}

export default Posts;
