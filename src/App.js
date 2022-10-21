import React, { useState } from "react";
import "bootstrap/dist/css/bootstrap.min.css";

import Header from "./components/Header";
import LeftSidebar from "./components/LeftSidebar";
import NewPost from "./components/NewPost";
import Posts from "./components/Posts";
import Advertising from "./components/Advertising";
import postList from "./components/Posts/postList/postListArr";
import "./App.css";

function App() {
  const [posts, setPosts] = useState(postList);

  // var date = new Date("Wed, 04 May 2022");
  // var year = date.toLocaleString("default", { year: "numeric" });
  // var month = date.toLocaleString("default", { month: "2-digit" });
  // var day = date.toLocaleString("default", { day: "2-digit" });
  // var formattedDate = day + "-" + month + "-" + year;
  const d = new Date();

  let day = d.toLocaleString();

  return (
    <div className="App">
      <Header />
      <div className="components">
        <div>
          <h1>{day}</h1>
          <hr />
        </div>

        <LeftSidebar />
        <div>
          <NewPost posts={posts} setPosts={setPosts} />
          <Posts posts={posts} />
        </div>
        <Advertising />
      </div>
    </div>
  );
}

export default App;
