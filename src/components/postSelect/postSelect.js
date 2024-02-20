import React, { useState, useEffect } from "react";

const PostSelect = ({ setPostList }) => {
  const [posts, setPosts] = useState([]);
  const [selectedPost, setSelectedPost] = useState(null);

  useEffect(() => {
    const fetchPosts = async () => {
      try {
        const response = await fetch(
          "https://jsonplaceholder.typicode.com/posts"
        );
        const data = await response.json();
        setPosts(data);
        const postsCount = data.reduce((acc, post) => {
          const userId = post.userId;
          acc[userId] = (acc[userId] || 0) + 1;
          return acc;
        }, {});
        setPostList(postsCount);
      } catch (error) {
        console.error("Error fetching posts:", error);
      }
    };

    fetchPosts();
  }, []);

  const handlePostChange = (event) => {
    const postId = event.target.value;
    const selectedPost = posts.find((post) => post.id === parseInt(postId, 10));
    setSelectedPost(selectedPost);
  };

  return (
    <div>
      <label
        htmlFor="postSelect"
        className="block mb-2 text-sm font-medium text-gray-900 dark:text-white"
      >
        Select a Post:
      </label>
      <select
        id="postSelect"
        onChange={handlePostChange}
        className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
      >
        <option value="">Select an option</option>
        {posts.map((post) => (
          <option key={post.id} value={post.id}>
            {post.title}
          </option>
        ))}
      </select>

      {selectedPost && (
        <div>
          <h2 className="block mb-2 text-sm font-medium text-gray-900 dark:text-white">
            Selected Post:
          </h2>
          <p>
            <span className="mb-2 text-sm font-medium text-gray-900 dark:text-white">
              Title:
            </span>{" "}
            {selectedPost.title}
          </p>
          <p>
            <span className="mb-2 text-sm font-medium text-gray-900 dark:text-white">
              Body:
            </span>{" "}
            {selectedPost.body}
          </p>
        </div>
      )}
    </div>
  );
};

export default PostSelect;
