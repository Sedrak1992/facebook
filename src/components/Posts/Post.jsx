import React from "react";

import GlobeIcon from "../../icons/GlobeIcon";
import ThreeDotsIcon from "../../icons/ThreeDotsIcon";
import PostAction from "./PostAction/index";

const Post = ({ post }) => {
  return (
    <div className="container-for-new-post">
      <div className="post-header">
        <div>
          <div className="d-flex align-items-center">
            <img className="post-logo" src={post.imgLogo} />
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
          <div className="three-dots-svg">
            <ThreeDotsIcon />
          </div>
        </div>
      </div>
      <h6 className="post-title">{post.title}</h6>
      {post.imgSrc && (
        <div className="post-container-news">
          <img src={post.imgSrc} className="post-image-news" />
          <div className="container-to-learn-more">
            <div className="to-learn-more-icon"></div>
          </div>
        </div>
      )}
      <div className="new-post-news">
        <h4 className="pt-1 pb-1">{post.linkTitle} </h4>
        <p className="new-post-news-title"> {post.preview}</p>
      </div>
      <div className="post-line"> </div>
      <PostAction />
    </div>
  );
};

export default Post;
