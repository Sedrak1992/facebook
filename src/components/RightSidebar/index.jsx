import React from "react";
import Search from "../../icons/Search";
import "./style.css";
import NewRooms from "./svg/NewRooms";
import Options from "./svg/Options";

import usersList from "./users/usersList";
const RightSidebar = () => {
  return (
    <div className="RightSidebar ">
      <div className="d-flex justify-content-between align-items-center mt-1 mb-3 ms-2">
        <p>Контакты</p>
        <div className="icons  d-flex">
          <div>
            <NewRooms />
          </div>
          <div>
            <Search />
          </div>
          <div>
            <Options/>
          </div>
        </div>
      </div>
      {usersList.map((obj, index) => (
        <div key={index} className="mt-1 userContes">
          <div className="d-flex align-items-center">
            <div className={obj.stories ? "stories" : "stories--no"}>
              <img src={obj.img} alt="user" className="user-img" />
            </div>
            <p>{obj.name}</p>
          </div>
          {obj.userOnline && (
            <div className="Belly">
              <div className="greenCircle"></div>
            </div>
          )}
        </div>
      ))}
    </div>
  );
};

export default RightSidebar;
