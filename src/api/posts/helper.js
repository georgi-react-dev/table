export const transformPosts = (posts) => {
    return posts.map((post) => {
      return { ...post, link: [post.author?.name, `/user/${post.author._id}`] };
    });
  };