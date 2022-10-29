import React, { useState } from "react";
import "./style.css";

const Comments = ({ img, stories, comment, name, answers, comments }) => {
  const [fromLike, setFromLike] = useState(false);
  const [respond, setRespond] = useState(false);

  const [inputComment, setInputComment] = useState(`${name}, `);
  const [commentAnswers, setCommentAnswers] = useState([]);


  
  const replyComment = (event) => {
    if (inputComment.length > 0 && event.key === "Enter") {
      setCommentAnswers([
        {
          answers: inputComment,
          maName: "Sedrak Qocharyan",
          img: "/facebook/img/269669879_3137994416483686_4685938482215500696_n.jpeg",
        },
        ...commentAnswers,
      ]);
      setInputComment("");
    }
  };

  const buttonFromLike = () => {
    setFromLike(!fromLike);
  };
  const respondClick = () => {
    setRespond(!respond);
  };
  return (
    <div className="d-flex ps-2 mt-1">
      <div>
        <div>
          <div className={stories ? "stories" : "stories--no"}>
            <img src={img} className="user-img" />
          </div>
        </div>
      </div>
      <div className="parent">
        <div className="onComment">
          <h6 className="user-name">{name}</h6>
          <p>{comment}</p>
        </div>
        <div className="d-flex ps-4">
          <button
            onClick={buttonFromLike}
            className={`comment-button ${fromLike ? " comment-like " : ""}`}
          >
            Like
          </button>
          <button className="comment-button" onClick={respondClick}>
            reply
          </button>
        </div>
        {respond && (
          <div className="black-answers-content">
            <div className="respond-container">
              {commentAnswers.map((item, index) => (
                <div key={index} className="comment--reply--div ms-4 mb-3">
                  <span className="reply-comment">
                    <div className="user--img">
                      <img src={item.img} alt="user-avatar"/>
                    </div>
                    <p className="user-name">{item.maName}</p>
                    {item.answers}
                  </span>
                </div>
              ))}
              <div className="respond-input d-flex align-items-center ms-4">
                <input
                  type="test"
                  value={inputComment}
                  className="ms-1"
                  placeholder={`reply ...  ${name} .... `}
                  onKeyDown={replyComment}
                  onChange={(event) => setInputComment(event.target.value)}
                />
              </div>
            </div>
          </div>
        )}
      </div>
    </div>
  );
};

export default Comments;
