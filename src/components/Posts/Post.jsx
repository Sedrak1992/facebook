import React from "react";

import GlobeIcon from "../../icons/GlobeIcon";
import ThreeDotsIcon from "../../icons/ThreeDotsIcon";

const Post = ({ post }) => {
  return (
    <div>
      <div className="post--header">
        <div>
          <div className="d-flex align-items-center">
            <img className="post--logo" src={post.imgLogo} />
            <div>
              <div>
                {post.body} {post.name}
              </div>
              <div>
                {post.data} {post.a}г. <GlobeIcon />
              </div>
            </div>
          </div>
        </div>
        <div>
          <div className="threeDotsIcon">
            <ThreeDotsIcon />
          </div>
        </div>
      </div>
      <h6 className="title"> {post.title}</h6>
      <img src={post.imgSrc} />
      <div className="subtitle">
        <h4 style={{ padding: "6px 0" }}>{post.linkTitle} </h4>
        <p className="brightText"> {post.preview}</p>
      </div>
      <div className="strip"> </div>
      <div className="d-flex justify-content-around pb-3">
        <div className="d-flex  align-items-center ">
          <div className="like"></div>
          <div className="mx-2">Нравится</div>
        </div>
        <div className="d-flex  align-items-center">
          <div className="comment"></div>
          <div className="mx-2">Комментировать</div>
        </div>
        <div className="d-flex  align-items-center ">
          <div className="share"></div>
          <div className="mx-2">Поделиться</div>
        </div>
      </div>
      <div className="stripP"> </div>
      {post.linkTitle && (
        <div className="backgroundAdditional">
          <div className="additionalInformation"></div>
        </div>
      )}
    </div>
  );
};

export default Post;
