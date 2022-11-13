import React, { useState } from "react";

import "./style.css";

const LeftSidebar = () => {
  const [open, setOpen] = useState(false);

  const showMore = () => {
    setOpen(false);
  };
  const showLess = () => {
    setOpen(true);
  };

  return (
    <div className="left-sidebar">
      <div className="image-categories mt-2">
        <div className="user-image ms-4">
          <img src="/facebook/img/269669879_3137994416483686_4685938482215500696_n.jpeg" />
        </div>

        <h3 className="ms-3">Sedrak Qocharyan - 777777 -</h3>
      </div>
      <div className="image-categories">
        <img
          src="https://static.xx.fbcdn.net/rsrc.php/v3/yj/r/tSXYIzZlfrS.png"
          className="ms-4"
        />
        <h3 className="ms-3">Друзья</h3>
      </div>
      <div className="image-categories">
        <img
          src="https://static.xx.fbcdn.net/rsrc.php/v3/yj/r/Im_0d7HFH4n.png"
          className="ms-4"
        />
        <h3 className="ms-3">Группы</h3>
      </div>{" "}
      <div className="image-categories">
        <img
          src="https://static.xx.fbcdn.net/rsrc.php/v3/y4/r/MN44Sm-CTHN.png"
          className="ms-4"
        />
        <h3 className="ms-3">Marketplace</h3>
      </div>{" "}
      <div className="image-categories">
        <img
          src="https://static.xx.fbcdn.net/rsrc.php/v3/y-/r/FhOLTyUFKwf.png"
          className="ms-4"
        />
        <h3 className="ms-3">Watch</h3>
      </div>{" "}
      <div className="image-categories">
        <img
          src="https://static.xx.fbcdn.net/rsrc.php/v3/yJ/r/tYxGXJRPH5q.png"
          className="ms-4"
        />
        <h3 className="ms-3">Воспоминания</h3>
      </div>
      {open ? (
        <>
          <div className="image-categories">
            <img
              src="https://static.xx.fbcdn.net/rsrc.php/v3/yk/r/Cx_zTHRcUJ0.png"
              className="ms-4"
            />
            <h3 className="ms-3">Игровой видео</h3>
          </div>
          <div className="image-categories">
            <img
              src="https://static.xx.fbcdn.net/rsrc.php/v3/yg/r/JQCVtO0LVjk.png"
              className="ms-4"
            />
            <h3 className="ms-3">Игры</h3>
          </div>
          <div className="image-categories">
            <img
              src="https://static.xx.fbcdn.net/rsrc.php/v3/yW/r/nbUcQfHcgBv.png"
              className="ms-4"
            />
            <h3 className="ms-3">Избранное</h3>
          </div>
          <div className="image-categories">
            <img
              src="https://static.xx.fbcdn.net/rsrc.php/v3/yZ/r/vG0kc45wHaG.png"
              className="ms-4"
            />
            <h3 className="ms-3">Кризисное реагирование</h3>
          </div>
          <div className="image-categories">
            <img
              src="https://static.xx.fbcdn.net/rsrc.php/v3/yj/r/QILj4kKZMLW.png"
              className="ms-4"
            />
            <h3 className="ms-3">Мероприятия</h3>
          </div>
          <div className="image-categories">
            <img
              src="https://static.xx.fbcdn.net/rsrc.php/v3/yI/r/cbPxeioybsd.png"
              className="ms-4"
            />
            <h3 className="ms-3">Недавние действия с рекламой</h3>
          </div>
          <div className="image-categories">
            <img
              src="https://static.xx.fbcdn.net/rsrc.php/v3/yF/r/kD5Sv0isIPs.png"
              className="ms-4"
            />
            <h3 className="ms-3">Последние новости</h3>
          </div>
          <div className="image-categories">
            <img
              src="https://static.xx.fbcdn.net/rsrc.php/v3/y1/r/VhoyAd0w8bZ.png"
              className="ms-4"
            />
            <h3 className="ms-3">прямой эфир</h3>
          </div>
          <div className="image-categories">
            <img
              src="https://static.xx.fbcdn.net/rsrc.php/v3/yP/r/FMv4tTIpfwB.png"
              className="ms-4"
            />
            <h3 className="ms-3">Сборы пожертвований</h3>
          </div>
          <div className="image-categories">
            <img
              src="https://static.xx.fbcdn.net/rsrc.php/v3/yA/r/KlDlsO3UxDM.png"
              className="ms-4"
            />
            <h3 className="ms-3">Сохраненное</h3>
          </div>
          <div className="image-categories">
            <img
              src="https://static.xx.fbcdn.net/rsrc.php/v3/yj/r/0gH3vbvr8Ee.png"
              className="ms-4"
            />
            <h3 className="ms-3">Страницы</h3>
          </div>
          <div className="image-categories">
            <img
              src="https://static.xx.fbcdn.net/rsrc.php/v3/yc/r/lqymE2iRETE.png"
              className="ms-4"
            />
            <h3 className="ms-3">центр реклама</h3>
          </div>
          <div className="image-categories">
            <img
              src="https://static.xx.fbcdn.net/rsrc.php/v3/y_/r/8S1zU2zserN.png"
              className="ms-4"
            />
            <h3 className="ms-3">Цифровые коллекционные предметы</h3>
          </div>
          <div className="image-categories">
            <img
              src="https://static.xx.fbcdn.net/rsrc.php/v3/yX/r/z2lQL_jKCWe.png"
              className="ms-4"
            />
            <h3 className="ms-3">Эмоциональное здоровье</h3>
          </div>
          <div className="image-categories">
            <img
              src="https://static.xx.fbcdn.net/rsrc.php/v3/yM/r/C949oxkze-S.png"
              className="ms-4"
            />
            <h3 className="ms-3">Ads Manager</h3>
          </div>
          <div className="image-categories">
            <img
              src="https://static.xx.fbcdn.net/rsrc.php/v3/yi/r/FZK_jEWapM0.png"
              className="ms-4"
            />
            <h3 className="ms-3">COVID-19: Центр информации</h3>
          </div>
          <div className="image-categories">
            <img
              src="https://static.xx.fbcdn.net/rsrc.php/v3/yM/r/vWBUs7aYAiK.png"
              className="ms-4"
            />
            <h3 className="ms-3">Facebook Pay</h3>
          </div>
          <div className="image-categories">
            <img
              src="https://static.xx.fbcdn.net/rsrc.php/v3/yv/r/ocBBGg-gRd5.png"
              className="ms-4"
            />
            <h3 className="ms-3">Messages</h3>
          </div>
          <div className="image-categories round-background" onClick={showMore}>
            <img
              className="ms-4 arrow"
              src="https://icons-for-free.com/iconfiles/png/128/expand+expand+less+expandless+top+up+icon-1320185733356205582.png"
            />
            <h3 className="ms-3"> Показать меньше</h3>
          </div>
        </>
      ) : (
        <div className="image-categories round-background" onClick={showLess}>
          <img
            src="https://icons-for-free.com/iconfiles/png/128/down+expand+expand+more+expandmore+icon-1320185733183690947.png"
            className="ms-4 arrow"
          />
          <h3 className="ms-3">Показать больше</h3>
        </div>
      )}
    </div>
  );
};

export default LeftSidebar;
