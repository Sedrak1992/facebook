import React from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import { Routes, Route } from "react-router-dom";

import Header from "./components/HomePage/Header";
import Messages from "./components/Messages";
import Home from "./components/HomePage/Home.jsx";


import "./App.css";

function App() {



  return (
    <div className="App">
      <Header />
      <Routes>
        <Route path="/aa" element={<Messages />} />
        <Route path="/Home" element={<Home />} />
      </Routes>
    </div>
  );
}

export default App;
