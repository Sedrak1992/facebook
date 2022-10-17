import React from "react";
import "bootstrap/dist/css/bootstrap.min.css";

import Header from "./components/Header";
import LeftSidebar from "./components/LeftSidebar";
import NewPost from "./components/NewPost";
import Posts from "./components/Posts";
import Advertising from "./components/Advertising";

import "./App.css";

function App() {
  return (
    <div className="App">
      <Header />
      <div className="components">
        <LeftSidebar />
        <div>
          <NewPost />
          <Posts />
        </div>
        <Advertising />
      </div>
    </div>
  );
}

export default App;
