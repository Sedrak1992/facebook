import React from "react";

import Post from "./Post";

import "./style.css";

const Posts = ({ posts ,remove}) => {
  return (
    <div className="post-list-section">
      {posts.map((post, index) => (
        <Post number={index + 1} post={post} key={post.id} remove={remove} />
      ))}
    </div>
  );
};

export default Posts;
