import React, { useState } from "react";
import Comments from "../Comments/index";
import NewComment from "./NewComment/index";
import commentsList from "./comments";

import "./style.css";

const PostAction = ({ assetLike, isLike }) => {
  const [openCommand, setOpenCommand] = useState(false);
  const [inputValue, setInputValue] = useState("");
  const [commentContainer, setCommentContainer] = useState(false);
  const [comments, setComments] = useState(commentsList);

  const newPostValue = (event) => {
    setCommentContainer(true);
    if (inputValue.length > 0 && event.key === "Enter") {
      setComments([
        {
          id: Date.now(),
          name: "Sedrak Qocharyan",
          img: "/facebook/user/269669879_3137994416483686_4685938482215500696_n.jpeg",
          comment: inputValue,
        },
        ...comments,
      ]);
      setInputValue("");
    }
  };

  const WriteANewComment = () => {
    setOpenCommand(!openCommand);
    setCommentContainer(!commentContainer);
  };

  return (
    <div>
      <div className="d-flex justify-content-around pb-3 comment-text">
        <div
          className={
            `d-flex  align-items-center action-button ` +
            (isLike ? " post-like " : "")
          }
          onClick={assetLike}
        >
          <div className="like"></div>
          <div className="mx-2">Нравится</div>
        </div>
        <div
          className="d-flex  align-items-center action-button"
          onClick={WriteANewComment}
        >
          <div className="comment"></div>
          <div className="mx-2">Комментировать</div>
        </div>
        <div className="d-flex  align-items-center  action-button ">
          <div className="share"></div>
          <div className="mx-2">Поделиться</div>
        </div>
      </div>
      {openCommand && (
        <NewComment
          inputValue={inputValue}
          setInputValue={setInputValue}
          newPostValue={newPostValue}
        />
      )}
      <div className="post-line"></div>
      <div className={commentContainer ? "comments-container" : "d-none"}>
        {commentContainer &&
          comments.map((item) => (
            <Comments key={item.id} comments={comments} {...item} />
          ))}
      </div>
    </div>
  );
};

export default PostAction;
