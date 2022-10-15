import React from "react";
import GlobeIcon from "./GlobeIcon";
import ThreeDotsIcon from "./ThreeDotsIcon";

import "./style.css";

const Poster = () => {
  return (
    <div className="poster--box">
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
      <p>
        ԱՄՆ-ն չեղյալ է հայտարարել դիվանագիտական այցը՝ դեպի Չինաստան՝ ակնկալվող
        բարձրաստիճան հանդիպման մերժումից հետո
      </p>
      <img src="https://external.fevn11-1.fna.fbcdn.net/emg1/v/t13/7770111784586356116?url=https%3A%2F%2Fcivic.am%2Fuploads%2Fposts%2F2021-07%2F1626697336_1.jpg&fb_obo=1&utld=civic.am&stp=c0.5000x0.5000f_dst-jpg_flffffff_p852x444_q75&ccb=13-1&oh=06_AapdZly4DRaED-ebj0lN0noeCw0J9VSxE55NpSBOZhC86g&oe=634C002B&_nc_sid=7ca135" />
      <div className="a">
        <h4 style={{ padding: "6px 0" }}>CIVIC.AM</h4>
        <p>
          ԱՄՆ-ն չեղյալ է հայտարարել դիվանագիտական այցը՝ դեպի Չինաստան՝ ակնկալվող
          ...
        </p>
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

export default Poster;
