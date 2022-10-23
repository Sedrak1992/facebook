import React, { useState } from "react";
import { NavLink } from "react-bootstrap";

import Live from "../../icons/Live ";
import VideoCameraBack from "../../icons/VideoCameraBack";
import Mood from "../../icons/Mood";

import "./style.css";

const NewPost = ({ posts, setPosts }) => {
  const [post, setPost] = useState({ title: "" });

  const d = new Date();
  let day = d.toLocaleString();

  const handleKeyDown = (event) => {
    if (post.title.length > 0 && event.key === "Enter") {
      setPosts([
        ...posts,
        {
          ...post,
          id: Date.now(),
          name: "Sedrak Qocharyan",
          imgLogo: "/img/269669879_3137994416483686_4685938482215500696_n.jpeg",
          data: day,
        },
      ]);
      setPost({ title: "" });
    }
  };

  return (
    <div className="newPost--div">
      <div className="newPost--div__box">
        <div className="logoAvatarPost">
          <img src="/img/269669879_3137994416483686_4685938482215500696_n.jpeg" />
        </div>
        <input
          placeholder=" Что у вас нового  Sedrak ? "
          type="text"
          onKeyDown={handleKeyDown}
          value={post.title}
          onChange={(e) => setPost({ ...post, title: e.target.value })}
        />
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
