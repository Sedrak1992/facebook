import React, { useState } from "react";

import UsersList from "../../constants/users/usersList";
import "./style.css";
import ThreeDots from "./svg/ThreeDots";
import YetSvg from "./svg/yetSvg";
import profile from "../../constants/ProfileList/Profiles";
import Post from "../HomePage/Posts/Post";
import { dateAndHour } from "../HomePage/NewPost";

const MyMainPage = () => {
  const [removePage, setRemovePage] = useState(profile);

  const [title, setTitle] = useState("");

  const addPost = (event) => {
    if (title.length > 0 && event.key === "Enter") {
      setRemovePage([
        {
          title,
          id: Date.now(),
          name: "Sedrak Qocharyan",
          imgLogo:
            "/facebook/img/269669879_3137994416483686_4685938482215500696_n.jpeg",
          data: dateAndHour,
          quantity: 0,
        },
        ...removePage,
      ]);
      setTitle("");
    }
  };
  const remove = (id) => {
    setRemovePage(removePage.filter((obj) => obj.id !== id));
  };

  return (
    <div>
      <div className="my-main-page">
        <div className="my-content">
          <div className="my-cover-image">
            <img src="/facebook/img/cover.jpeg" />
          </div>
          <div className="container-user mt-2 d-flex justify-content-between">
            <div className="d-flex">
              <div className="icons-blok">
                <div className="container-user-image">
                  <img src="/facebook/img/269669879_3137994416483686_4685938482215500696_n.jpeg" />
                </div>
                <div className="change-photo d-flex justify-content-center align-items-center">
                  <div className="change-photo-icons"></div>
                </div>
              </div>

              <div>
                <h2>Sedrak Qocharyan </h2>
                <h5>Друзья: 156</h5>
                <div className="d-flex">
                  {UsersList.map((item, index) => (
                    <div
                      key={index}
                      className="user-pictures d-flex justify-content-center"
                    >
                      <img src={item.img} />
                    </div>
                  ))}
                </div>
              </div>
            </div>
            <div className="container-icons">
              <div className="plus-png">
                <img src="https://static.xx.fbcdn.net/rsrc.php/v3/yX/r/0mrcsDB7uS9.png" />
                добавить история
              </div>
              <div className="edit-profile">
                <img src="https://static.xx.fbcdn.net/rsrc.php/v3/yD/r/lYApul5-WxY.png" />
                редактировать профиль
              </div>
            </div>
          </div>
          <div className="d-flex justify-content-between mt-4 wrapper-blok pt-3">
            <div className="blok-1 ss">
              <ul className="d-flex m-0 p-0">
                <li>
                  <a href="#">популярный</a>
                </li>
                <li>
                  <a href="#">информатика</a>
                </li>
                <li>
                  <a href="#">друзья</a>
                </li>
                <li>
                  <a href="#">фото</a>
                </li>
                <li>
                  <a href="#">видео</a>
                </li>
                <li>
                  <a href="#">посещение</a>
                </li>
                <li>
                  <a href="">
                    ещё
                    <YetSvg />
                  </a>
                </li>
              </ul>
            </div>
            <div className="aaaa">
              <div>
                <ThreeDots />
              </div>
            </div>
          </div>
        </div>
      </div>
      <div>
        <div className="my-container-is--a-leaf d-flex justify-content-between">
          <div className="container-list-right">
            <div className="my-container-box1 p-4">
              <h3>Краткая информация</h3>
              <p className="text-center">
                #realmadrid.am <br />
                2005 🇦🇲 7
              </p>
              <div className="edited-biography-bloc text-center p-2">
                <p className="m-0">Редактировать актуальное</p>
              </div>
            </div>
          </div>
          <div className="container-list-left">
            <div className="my-container-box2 p-3">
              <div className="anything-new-bloc d-flex justify-content-between align-items-center pb-2">
                <div className="item">
                  <img src="/facebook/img/269669879_3137994416483686_4685938482215500696_n.jpeg" />
                </div>
                <div className="item-input">
                  <input
                    type="test"
                    placeholder="Что у вас нового"
                    onChange={(event) => setTitle(event.target.value)}
                    onKeyDown={addPost}
                    value={title}
                  />
                </div>
              </div>
              <div className="d-flex pt-2">
                <div className="d-flex w-50 justify-content-center bloc-item align-items-center">
                  <div className="d-flex justify-content-center align-items-center">
                    <div className="live-img"></div>
                  </div>
                  <div className="ms-2">
                    <h3 className="m-0">прямой эфир</h3>
                  </div>
                </div>
                <div className="d-flex w-50 justify-content-center bloc-item p-2">
                  <div className="d-flex justify-content-center align-items-center">
                    <div className="photo-and-video"></div>
                  </div>
                  <div className="ms-2">
                    <h3 className="m-0">фото и видео</h3>
                  </div>
                </div>
              </div>
            </div>
            <div>
              <div className="leaf-container mt-2 d-flex justify-content-between">
                <div>
                  <h2>публикация</h2>
                </div>
                <div>
                  <p>фильтр</p>
                </div>
                <div>
                  <p>управление публикация</p>
                </div>
              </div>
            </div>
            {removePage.map((post) => (
              <Post key={post.id} post={post} remove={remove} />
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default MyMainPage;
