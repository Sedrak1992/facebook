import React from "react";

import UsersList from "../HomePage/RightSidebar/users/usersList";
import "./style.css";
import ThreeDots from "./svg/ThreeDots";
import YetSvg from "./svg/yetSvg";

const MyMainPage = () => {
  return (
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
              <h2>Sedrak Qocharyan</h2>
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
          <div className="blok-1">
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
  );
};

export default MyMainPage;
