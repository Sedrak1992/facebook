import React from "react";
import "bootstrap/dist/css/bootstrap.min.css";

import Header from "./components/Header";
import LeftSidebar from "./components/LeftSidebar";
import NewPost from "./components/NewPost";
import Poster from "./components/Poster";

import "./App.css";

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
