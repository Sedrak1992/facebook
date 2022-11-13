import React from "react";
import GlobeIcon from "../../icons/GlobeIcon";
import ThreeDotsIcon from "../../icons/ThreeDotsIcon";

import UsersList from "../HomePage/RightSidebar/users/usersList";
import "./style.css";
import ThreeDots from "./svg/ThreeDots";
import YetSvg from "./svg/yetSvg";
import PostAction from "../HomePage/Posts/PostAction/index";

const MyMainPage = ({ post }) => {
  return (
    <div>
      <div className="my-main-page">
        <div className="my-content">
          <div className="my-cover-image">
            <img src="/facebook/img/cover.jpeg" />
          </div>
          <div className="container-user mt-2 d-flex justify-content-between">
            <div className="d-flex">
              <div className="icons-blok">
                <div className="container-user-image">
                  <img src="/facebook/img/269669879_3137994416483686_4685938482215500696_n.jpeg" />
                </div>
                <div className="change-photo d-flex justify-content-center align-items-center">
                  <div className="change-photo-icons"></div>
                </div>
              </div>

              <div>
                <h2>Sedrak Qocharyan iiiii </h2>
                <h5>Друзья: 156</h5>
                <div className="d-flex">
                  {UsersList.map((item, index) => (
                    <div
                      key={index}
                      className="user-pictures d-flex justify-content-center"
                    >
                      <img src={item.img} />
                    </div>
                  ))}
                </div>
              </div>
            </div>
            <div className="container-icons">
              <div className="plus-png">
                <img src="https://static.xx.fbcdn.net/rsrc.php/v3/yX/r/0mrcsDB7uS9.png" />
                добавить история
              </div>
              <div className="edit-profile">
                <img src="https://static.xx.fbcdn.net/rsrc.php/v3/yD/r/lYApul5-WxY.png" />
                редактировать профиль
              </div>
            </div>
          </div>
          <div className="d-flex justify-content-between mt-4 wrapper-blok pt-3">
            <div className="blok-1 ss">
              <ul className="d-flex m-0 p-0">
                <li>
                  <a href="#">популярный</a>
                </li>
                <li>
                  <a href="#">информатика</a>
                </li>
                <li>
                  <a href="#">друзья</a>
                </li>
                <li>
                  <a href="#">фото</a>
                </li>
                <li>
                  <a href="#">видео</a>
                </li>
                <li>
                  <a href="#">посещение</a>
                </li>
                <li>
                  <a href="">
                    ещё
                    <YetSvg />
                  </a>
                </li>
              </ul>
            </div>
            <div className="aaaa">
              <div>
                <ThreeDots />
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="sssss">
        <div className="my-container-is--a-leaf d-flex justify-content-between">
          <div className="container-list-right">
            <div className="my-container-box1 p-4">
              <h3>Краткая информация</h3>
              <p className="text-center">
                #realmadrid.am <br />
                2005 🇦🇲 7
              </p>
              <div className="edited-biography-bloc text-center p-2">
                <p className="m-0">Редактировать актуальное</p>
              </div>
            </div>
          </div>
          <div className="container-list-left">
            <div className="my-container-box2 p-3">
              <div className="anything-new-bloc d-flex justify-content-between align-items-center pb-2">
                <div className="item">
                  <img src="/facebook/img/269669879_3137994416483686_4685938482215500696_n.jpeg" />
                </div>
                <div className="item-input">
                  <input type="test" placeholder="Что у вас нового" />
                </div>
              </div>
              <div className="d-flex pt-2">
                <div className="d-flex w-50 justify-content-center bloc-item align-items-center">
                  <div className="d-flex justify-content-center align-items-center">
                    <div className="live-img"></div>
                  </div>
                  <div className="ms-2">
                    <h3 className="m-0">прямой эфир</h3>
                  </div>
                </div>
                <div className="d-flex w-50 justify-content-center bloc-item p-2">
                  <div className="d-flex justify-content-center align-items-center">
                    <div className="photo-and-video"></div>
                  </div>
                  <div className="ms-2">
                    <h3 className="m-0">фото и видео</h3>
                  </div>
                </div>
              </div>
            </div>
            <div>
              <div className="leaf-container mt-2 d-flex justify-content-between">
                <div>
                  <h2>публикация</h2>
                </div>
                <div>
                  <p>фильтр</p>
                </div>
                <div>
                  <p>управление публикация</p>
                </div>
              </div>
            </div>

            <div className="container-for-new-post">
              <div className="post-header">
                <div>
                  <div className="d-flex align-items-center">
                    <img
                      className="post-logo"
                      src="/facebook/img/269669879_3137994416483686_4685938482215500696_n.jpeg"
                    />
                    <div>
                      <div>Sedrak Qocharyan</div>
                      <div>
                        19 / 10/ 2022г. <GlobeIcon />
                      </div>
                    </div>
                  </div>
                </div>
                <div>
                  <div
                    className="three-dots-svg"
                    // onClick={() => remove(post.id)}
                  >
                    <ThreeDotsIcon />
                  </div>
                </div>
              </div>
              <h6 className="post-title">
                Discover the Giorgio Armani FW22 collection at the LaGalleria
                <br /> Luxury Boutiques: 3 Northern Ave, Yerevan
              </h6>
              <div className="post-container-news">
                <img
                  src="https://learn.microsoft.com/en-us/power-bi/consumer/media/end-user-license/power-bi-questions-small.png"
                  className="post-image-news"
                />
                <div className="container-to-learn-more">
                  <div className="to-learn-more-icon"></div>
                </div>
              </div>
              <div className="new-post-news">
                <h4 className="pt-1 pb-1">fhnjkrhfnb </h4>
                {/* <p className="new-post-news-title"> eiuhuj</p> */}
                <div className="d-flex align-items-center">
                  <img
                    className="x16dsc37"
                    height="18"
                    role="presentation"
                    src="data:image/svg+xml,%3csvg xmlns='http://www.w3.org/2000/svg' xmlns:xlink='http://www.w3.org/1999/xlink' viewBox='0 0 16 16'%3e%3cdefs%3e%3clinearGradient id='a' x1='50%25' x2='50%25' y1='0%25' y2='100%25'%3e%3cstop offset='0%25' stop-color='%2318AFFF'/%3e%3cstop offset='100%25' stop-color='%230062DF'/%3e%3c/linearGradient%3e%3cfilter id='c' width='118.8%25' height='118.8%25' x='-9.4%25' y='-9.4%25' filterUnits='objectBoundingBox'%3e%3cfeGaussianBlur in='SourceAlpha' result='shadowBlurInner1' stdDeviation='1'/%3e%3cfeOffset dy='-1' in='shadowBlurInner1' result='shadowOffsetInner1'/%3e%3cfeComposite in='shadowOffsetInner1' in2='SourceAlpha' k2='-1' k3='1' operator='arithmetic' result='shadowInnerInner1'/%3e%3cfeColorMatrix in='shadowInnerInner1' values='0 0 0 0 0 0 0 0 0 0.299356041 0 0 0 0 0.681187726 0 0 0 0.3495684 0'/%3e%3c/filter%3e%3cpath id='b' d='M8 0a8 8 0 00-8 8 8 8 0 1016 0 8 8 0 00-8-8z'/%3e%3c/defs%3e%3cg fill='none'%3e%3cuse fill='url(%23a)' xlink:href='%23b'/%3e%3cuse fill='black' filter='url(%23c)' xlink:href='%23b'/%3e%3cpath fill='white' d='M12.162 7.338c.176.123.338.245.338.674 0 .43-.229.604-.474.725a.73.73 0 01.089.546c-.077.344-.392.611-.672.69.121.194.159.385.015.62-.185.295-.346.407-1.058.407H7.5c-.988 0-1.5-.546-1.5-1V7.665c0-1.23 1.467-2.275 1.467-3.13L7.361 3.47c-.005-.065.008-.224.058-.27.08-.079.301-.2.635-.2.218 0 .363.041.534.123.581.277.732.978.732 1.542 0 .271-.414 1.083-.47 1.364 0 0 .867-.192 1.879-.199 1.061-.006 1.749.19 1.749.842 0 .261-.219.523-.316.666zM3.6 7h.8a.6.6 0 01.6.6v3.8a.6.6 0 01-.6.6h-.8a.6.6 0 01-.6-.6V7.6a.6.6 0 01.6-.6z'/%3e%3c/g%3e%3c/svg%3e"
                    width="18"
                  />
                  <div className="ms-2"> 200 </div>
                </div>
              </div>
              <div className="post-line"> </div>
              <PostAction />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default MyMainPage;
