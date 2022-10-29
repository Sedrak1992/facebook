import React, { useState } from "react";
import Comments from "../Comments/index";
import NewComment from "./NewComment/index";

const PostAction = ({}) => {
  const [open, setOpen] = useState(false);
  const [modal, setModal] = useState(false);
  const [inputValue, setInputValue] = useState("");
  const [commentBox, setCommentBox] = useState(false);
  const [comments, setComments] = useState([
    {
      id: 1,
      img: "/facebook/user/ГургенАбагян.jpeg",
      name: "Гурген Абагян",
      comment: "`fgg7i  nnnkk nnnnnn9u89u9",
      stories: true,
      answers: "",
    },
    {
      id: 2,
      img: "/facebook/user/Геворг Авоян.jpeg",
      name: "Геворг Авоян",
      comment: "`fgg7i  nnnkk nnnnnn9u89u9",
      stories: false,
      answers: "",
    },
    {
      id: 3,
      img: "/facebook/user/Рафаел Кочарян.jpeg",
      name: "Рафаел Кочарян",
      comment: "`fgg7i  nnnkk nnnnnn9u89u9",
      stories: false,
      answers: "",
    },
    {
      id: 4,
      img: "/facebook/user/Christine Avanesyan.jpeg",
      name: "Christine Avanesyan",
      comment: "`fgg7i  nnnkk nnnnnn9u89u9",
      stories: true,
      answers: "www",
    },
    {
      id: 5,
      img: "/facebook/user/YuraArzumanyan.jpeg",
      name: " Yura Arzumanyan ",
      comment: "`fgg7i  nnnkk nnnnnn9u89u9",
      stories: false,
      answers: "",
    },
    {
      id: 6,
      img: "/facebook/user/Toma Abagyan.jpeg",
      name: "Toma Abagyan",
      comment: "`fgg7i  nnnkk nnnnnn9u89u9",
      stories: false,
      answers: "hhhhhhhhh",
    },
  ]);

  const newPostValue = (event) => {
    setCommentBox(true);
    if (inputValue.length > 0 && event.key === "Enter") {
      setComments([
        {
          id: Date.now(),
          name: "Sedrak Qocharyan",
          img: "/facebook/user/269669879_3137994416483686_4685938482215500696_n.jpeg",
          comment: inputValue,
          answers: "fff",
        },
        ...comments,
      ]);
      setInputValue("");
    }
  };

  const toggle = () => {
    setOpen(!open);
  };
  const outModel = () => {
    setModal(!modal);
    setCommentBox(!commentBox);
  };

  return (
    <div>
      <div className="d-flex justify-content-around pb-3 text">
        <div
          className={
            `d-flex  align-items-center action-button` +
            (open ? " post-like " : "")
          }
          onClick={toggle}
        >
          <div className="like"></div>
          <div className="mx-2">Нравится</div>
        </div>
        <div
          className="d-flex  align-items-center action-button"
          onClick={outModel}
        >
          <div className="comment"></div>
          <div className="mx-2">Комментировать</div>
        </div>
        <div className="d-flex  align-items-center  action-button ">
          <div className="share"></div>
          <div className="mx-2">Поделиться</div>
        </div>
      </div>
      {modal && (
        <NewComment
          inputValue={inputValue}
          setInputValue={setInputValue}
          newPostValue={newPostValue}
        />
      )}
      <div className="stripP"></div>
      <div className={commentBox ? "CommentDiv" : "display"}>
        {commentBox &&
          comments.map((item) => (
            <Comments key={item.id} comments={comments} {...item} />
          ))}
      </div>
    </div>
  );
};

export default PostAction;
