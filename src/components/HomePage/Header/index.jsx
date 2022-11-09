import React from "react";
import { Link } from "react-router-dom";

import Search from "../../../icons/Search";
import Home from "../../../icons/Home";
import People from "../../../icons/People";
import Marketplace from "../../../icons/Marketplace";
import Watch from "../../../icons/Watch";
import TheGame from "../../../icons/TheGame";
import AppsIcon from "../../../icons/AppsIcon";
import Messages from "../../../icons/Messages";
import Notification from "../../../icons/Notification";

import "./style.css";

const Header = () => {
  return (
    <header>
      <div className="header--section d-flex">
        <div className="logo-avatar">
          <Link to="/Home">
            <img src="/facebook/img/Facebook_Logo_(2019).png" alt="logo" />
          </Link>
        </div>
        <div className="position-relative">
          <Search />
          <input className="search--input" placeholder=" поиск на Facebook" />
        </div>
      </div>
      <div className="header--navigation">
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
      <div className="d-flex">
        <div className="icon">
          <AppsIcon />
        </div>
        <div className="icon">
          <Link to="/aa">
            <Messages />
          </Link>
        </div>
        <div className="icon">
          <Notification />
        </div>
        <div className="logo-avatar ms-2">
          <Link to="/MyMainPage">
            <img src="/facebook/img/269669879_3137994416483686_4685938482215500696_n.jpeg" />
          </Link>
        </div>
      </div>
    </header>
  );
};

export default Header;
