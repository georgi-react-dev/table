export const transformPosts = (posts, users) => {
    return posts.map((post) => {
      const user = users.filter((user) => user.id === post.userId)[0];
      const newPost = { ...post, link: [user?.name, `/user/${post.userId}`] };

      console.log("newPost", newPost);
      return newPost;
    });
  };