import React from "react";

import GlobeIcon from "../../icons/GlobeIcon";
import ThreeDotsIcon from "../../icons/ThreeDotsIcon";
import PostAction from "./PostAction/index";

const Post = ({ post }) => {
  return (
    <div className="postNou">
      <div className="post--header">
        <div>
          <div className="d-flex align-items-center">
            <img className="post--logo" src={post.imgLogo} />
            <div>
              <div>
                {post.body} {post.name}
              </div>
              <div>
                {post.data}г. <GlobeIcon />
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
      {post.imgSrc && (
        <div className="componentsNewsImg">
          <img src={post.imgSrc} className="newsImg" />
          <div className="backgroundAdditional">
            <div className="additionalInformation"></div>
          </div>
        </div>
      )}
      <div className="subtitle">
        <h4 style={{ padding: "6px 0" }}>{post.linkTitle} </h4>
        <p className="brightText"> {post.preview}</p>
      </div>
      <div className="strip"> </div>
      <PostAction />
    </div>
  );
};

export default Post;
