import React from "react";

import list from "./postList/postListArr";

import Post from "./Post";
import "./style.css";

const Posts = () => {
  return (
    <div className="poster--box">
      {list.map((post, index) => (
        <Post key={index} post={post} />
      ))}
    </div>
  );
};

export default Posts;
