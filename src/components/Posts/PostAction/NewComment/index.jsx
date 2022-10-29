import React, { useState } from "react";

import "./style.css";

const NewComment = ({ inputValue, newPostValue, setInputValue }) => {
  return (
    <div>
      <input
        placeholder="Add new comment"
        type="text"
        value={inputValue}
        onKeyDown={newPostValue}
        className="new-comment-input mb-2"
        onChange={(event) => setInputValue(event.target.value)}
      />
    </div>
  );
};

export default NewComment;
