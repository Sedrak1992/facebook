import React from "react";
import Search from "../../icons/Search";
import Home from "../../icons/Home";

import People from "../../icons/People";
import Marketplace from "../../icons/Marketplace";
import Watch from "../../icons/Watch";

import "./style.css";
import TheGame from "../../icons/TheGame";
import AppsIcon from "../../icons/AppsIcon";
import Messages from "../../icons/Messages";
import Notification from "../../icons/Notification";

const Header = () => {
  return (
    <header>
      <div className="header--dox">
        <div className="logo-avatar">
          <img
            src="/img/269669879_3137994416483686_4685938482215500696_n.jpeg"
            alt="logo"
          />
        </div>
        <div className="box-input">
          <Search />
          <input className="search__input" placeholder="поиск на Facebook" />
        </div>
      </div>
      <div className="header--dox2">
        <div>
          <Home />
        </div>
        <div>
          <People />
        </div>
        <div>
          <Watch />
        </div>
        <div>
          <Marketplace />
        </div>
        <div>
          <TheGame />
        </div>
      </div>
      <div className="div-components">
        <div className="icon">
          <AppsIcon />
        </div>
        <div className="icon">
          <Messages />
        </div>
        <div className="icon">
          <Notification />
        </div>
        <div className="logo-avatar ms-2">
          <img src="/img/269669879_3137994416483686_4685938482215500696_n.jpeg" />
        </div>
      </div>
    </header>
  );
};

export default Header;
