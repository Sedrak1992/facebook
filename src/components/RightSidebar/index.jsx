import React from "react";
import Search from "../../icons/Search";
import "./style.css";
import NewRooms from "./svg/NewRooms";
import Options from "./svg/Options";
const RightSidebar = () => {
  return (
    <div className="RightSidebar ">
      <div className="d-flex justify-content-between">
        <p>Контакты</p>
        <div className="icons  d-flex">
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
    </div>
  );
};

export default RightSidebar;
