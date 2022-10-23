import React, { useState } from "react";
import "bootstrap/dist/css/bootstrap.min.css";

import Header from "./components/Header";
import LeftSidebar from "./components/LeftSidebar";
import NewPost from "./components/NewPost";
import Posts from "./components/Posts";
import postList from "./components/Posts/postList/postListArr";
import RightSidebar from "./components/RightSidebar";

import "./App.css";

function App() {
  const [posts, setPosts] = useState(postList);

  return (
    <div className="App">
      <Header />
      <div className="components">
        <LeftSidebar />
        <div>
          <NewPost posts={posts} setPosts={setPosts} />
          <Posts posts={posts} />
        </div>
        <RightSidebar />
      </div>
    </div>
  );
}

export default App;
