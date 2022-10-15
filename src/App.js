import React from "react";

import Header from "./components/Header";
import LeftSidebar from "./components/LeftSidebar";
import NewPost from "./components/NewPost";

import "./App.css";
import Poster from "./components/Poster";

function App() {
  return (
    <div className="App">
      <Header />
      <div className="components">
        <LeftSidebar />
        <div>
          <NewPost />
          <Poster />
        </div>
        <LeftSidebar />
      </div>
    </div>
  );
}

export default App;
