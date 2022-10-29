import React, { useState } from "react";
import "./style.css";

const Comments = ({ id, img, stories, comment, name, answers, comments }) => {
  const [fromLike, setFromLike] = useState(false);
  const [respond, setRespond] = useState(false);

  const [inputTest, setInputTest] = useState(`${name}, `);

  const [commentAnswers, setCommentAnswers] = useState([]);

  const replyComment = (e) => {
    setCommentAnswers([
      {
        answers: inputTest,
      },
      ...commentAnswers,
    ]);
    console.log(commentAnswers, "7");
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
          <div className={stories ? "stories" : "storiesNo"}>
            <img src={img} className="userImg" />
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
            className={`comment-button  ${fromLike ? " comment-like " : ""}`}
          >
            Like
          </button>
          <button className="comment-button" onClick={respondClick}>
            reply
          </button>
        </div>
        {/* {respond && ( */}
        <div className="mb-4">
          <div className="respond-container">
            {commentAnswers.map((item, index) => (
              <p key={index}>{item.answers}</p>
            ))}
            <div className="respond-input d-flex align-items-center ms-4">
              <input
                type="test"
                value={inputTest}
                className="ms-1"
                onChange={(e) => setInputTest(e.target.value)}
              />
            </div>
          </div>
          <button onClick={replyComment}> ok </button>
          <div></div>
        </div>
      </div>
    </div>
  );
};

export default Comments;
