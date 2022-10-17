import React from "react";

import GlobeIcon from "./GlobeIcon";
import ThreeDotsIcon from "./ThreeDotsIcon";

const Post = ({ post }) => {
  return (
    
    <div>
      <div className="post--header">
        <div>
          <div className="d-flex align-items-center">
            <img
              className="post--logo"
              src="https://scontent.fevn11-1.fna.fbcdn.net/v/t39.30808-1/301873921_386727586976324_2791501370287178672_n.jpg?stp=c31.0.80.80a_cp0_dst-jpg_p80x80&_nc_cat=103&ccb=1-7&_nc_sid=c6021c&_nc_ohc=PYgh7ybIb3wAX8mkhIJ&tn=ffOXZHG-wZX3vd6c&_nc_ht=scontent.fevn11-1.fna&oh=00_AT_oHeVVm_e4g6DtSQOh2gBm9TSOH1L2LbVgfTDxr7o-aQ&oe=634DDB4A"
            />
            <div>
              <div>Civic.am</div>
              <div>
                {post.data} г. <GlobeIcon />
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
      <h6 className="title"> {post.subtitle}</h6>
      <img src={post.imgSrc} />
      <div className="subtitle">
        <h4 style={{ padding: "6px 0" }}>CIVIC.AM</h4>
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
      <div className="backgroundAdditional">
        <div className="additionalInformation"></div>
      </div>
    </div>
  );
};

export default Post;
