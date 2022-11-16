import React from "react";
import Search from "../../../icons/Search";
import "./style.css";
import NewRooms from "./svg/NewRooms";
import Options from "./svg/Options";

import usersList from "../../../constants/usersList";

const RightSidebar = () => {
  return (
    <div className="right-sidebar p-2">
      <div className="d-flex justify-content-between align-items-center mt-1 mb-3 ms-2">
        <p className="m-0"> Контакты </p>
        <div className="icons-box d-flex">
          <div>
            <NewRooms />
          </div>
          <div>
            <Search />
          </div>
          <div>
            <Options />
          </div>
        </div>
      </div>
      {usersList.map((item, index) => (
        <div key={index} className="mt-1 user-contes-box">
          <div className="d-flex align-items-center">
            <div className={item.stories ? "stories-yes " : "stories-no"}>
              <img src={item.img} alt="user" className=" user-img" />
            </div>
            <p>{item.name}</p>
          </div>
          {item.userOnline && (
            <div className="online-border">
              <div className="user-online"></div>
            </div>
          )}
        </div>
      ))}
    </div>
  );
};

export default RightSidebar;
