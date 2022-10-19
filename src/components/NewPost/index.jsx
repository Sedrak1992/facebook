import React, { useState } from "react";
import { NavLink } from "react-bootstrap";

import "./style.css";
import Live from "../../icons/Live ";
import VideoCameraBack from "../../icons/VideoCameraBack";
import Mood from "../../icons/Mood";

const NewPost = () => {
  const [title, setTitle] = useState("");

  const addNnePort = () => {};
  return (
    <div className="newPost--div">
      <div className="newPost--div__box">
        <img src="/img/269669879_3137994416483686_4685938482215500696_n.jpeg" />
        <input
          placeholder=" Что у вас нового  Sedrak ? "
          type="text"
          value={title}
        />
        <button onClick={addNnePort}>add post</button>
      </div>
      <hr />
      <div className="box d-flex align-items-center pt-2 justify-content-between">
        <div className="d-flex p-2 align-items-center">
          <Live />
          <h4 className="ms-1">Прямой эфир</h4>
        </div>
        <div className="d-flex p-2 align-items-center">
          <VideoCameraBack />
          <h4 className="ms-1">Фото/видео</h4>
        </div>
        <div className="d-flex p-2 align-items-center">
          <Mood />
          <h4 className="ms-1">Чувства/действия</h4>
        </div>
      </div>
    </div>
  );
};

export default NewPost;
