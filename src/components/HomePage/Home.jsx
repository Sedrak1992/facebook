import React, { useState } from "react";

import LeftSidebar from "./LeftSidebar";
import NewPost from "./NewPost";
import RightSidebar from "./RightSidebar";

import postList from "./Posts/postList/postListArr";
import Posts from './Posts/index';

const Home = () => {
  const [posts, setPosts] = useState(postList);
  return (
      <div className="components">
        <LeftSidebar />
        <div className="content-app">
          <NewPost posts={posts} setPosts={setPosts} />
          <Posts posts={posts} />
        </div>
        <RightSidebar />
      </div>
  );
};

export default Home;
