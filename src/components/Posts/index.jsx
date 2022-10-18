import React, { useState } from "react";

import list from "./postList/postListArr";

import Post from "./Post";
import "./style.css";

const Posts = () => {
  const [posts, setPosts] = useState(list);

  const addPost = () => {};

  console.log(posts);
  return (
    <div className="poster--box">
      {list.map((post, index) => (
        <Post key={index} post={post} />
      ))}
    </div>
  );
};

export default Posts;