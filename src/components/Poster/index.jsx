import React from "react";
import GlobeIcon from "./GlobeIcon";
import ThreeDotsIcon from "./ThreeDotsIcon";

import "./style.css";

const Poster = () => {
  return (
    <div className="poster--box">
      <div className="post--header">
        <div>
          <div style={{ display: "flex", alignItems: "center" }}>
            <img
              className="post--logo"
              src="https://scontent.fevn11-1.fna.fbcdn.net/v/t39.30808-1/301873921_386727586976324_2791501370287178672_n.jpg?stp=c31.0.80.80a_cp0_dst-jpg_p80x80&_nc_cat=103&ccb=1-7&_nc_sid=c6021c&_nc_ohc=PYgh7ybIb3wAX8mkhIJ&tn=ffOXZHG-wZX3vd6c&_nc_ht=scontent.fevn11-1.fna&oh=00_AT_oHeVVm_e4g6DtSQOh2gBm9TSOH1L2LbVgfTDxr7o-aQ&oe=634DDB4A"
            />

            <div>
              <div>Civic.am</div>
              <div>
                30 июнь 2021 г. <GlobeIcon />
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
    </div>
  );
};

export default Poster;
