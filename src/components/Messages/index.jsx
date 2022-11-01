import React from "react";
import Chat from "./Chat";
import Users from "./Users";
import "./style.css";

const Messages = () => {
  return (
    <div className="d-flex mt-5">
      <Users />
      <Chat />
    </div>
  );
};

export default Messages;
