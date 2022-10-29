import React, { useState } from "react";

import Live from "../../icons/Live ";
import VideoCameraBack from "../../icons/VideoCameraBack";
import Mood from "../../icons/Mood";

import "./style.css";

const NewPost = ({ posts, setPosts }) => {
  const [title, setTitle] = useState("");

  const dateNow = new Date();
  let dateAndHour = dateNow.toLocaleString();

  const handleKeyDownPost = (event) => {
    if (title.length > 0 && event.key === "Enter") {
      setPosts([
        {
          title,
          id: Date.now(),
          name: "Sedrak Qocharyan",
          imgLogo:
            "/facebook/img/269669879_3137994416483686_4685938482215500696_n.jpeg",
          data: dateAndHour,
        },
        ...posts,
      ]);
      setTitle("");
    }
  };

  return (
    <div className="add--new--post">
      <div className="new--auction">
        <div className="logo--new--image">
          <img src="/facebook/img/269669879_3137994416483686_4685938482215500696_n.jpeg" />
        </div>
        <input
          placeholder="Что у вас нового  Sedrak ?"
          type="text"
          onKeyDown={handleKeyDownPost}
          value={title}
          onChange={(e) => setTitle(e.target.value)}
        />
      </div>
      <hr />
      <div className="container-will-share  d-flex align-items-center pt-2 justify-content-between">
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
