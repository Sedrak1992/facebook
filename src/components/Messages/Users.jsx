import React, { useState } from "react";

import UsersList from "../../constants/usersList";
import Search from "../../icons/Search";
const Users = () => {
  const [chatValue, setChatValue] = useState("");

  const filterUsers = UsersList.filter((item) => {
    return item.name.toLowerCase().includes(chatValue.toLowerCase());
  });
  return (
    <div className="users">
      <div className="d-flex justify-content-between p-2 align-items-center">
        <h2 className="m-0">Чаты</h2>
        <div className="d-flex">
          <div className="items d-flex align-items-center justify-content-center">
            <div className="options"></div>
          </div>
          <div className="items d-flex align-items-center justify-content-center">
            <div className="new-rooms"></div>
          </div>
          <div className="items d-flex align-items-center justify-content-center">
            <div className="send-chat"></div>
          </div>
        </div>
      </div>

      <div className="position-relative mt-31`">
        <Search />
        <input
          className="search--input messages-input-text"
          placeholder="поиск на Messages"
          onChange={(event) => setChatValue(event.target.value)}
        />
      </div>
      {filterUsers.map((item) => {
        return (
          <div
            key={item.id}
            className="d-flex messenger-container align-items-center"
          >
            <div className="messenger-box-images">
              <img src={item.img} />
            </div>
            <div>
              <h3>{item.name}</h3>
              <h6>{item.comment}</h6>
            </div>
          </div>
        );
      })}

      <div className="messenger-footer d-flex align-items-center ">
        <div className="download-messenger ms-3"></div>
        <p className="m-0 ms-3"> Установите приложение Messenger</p>
      </div>
    </div>
  );
};
export default Users;
