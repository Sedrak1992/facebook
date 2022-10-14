import React, { useState } from "react";

import "./style.css";

const Content = () => {
  const [open, setOpen] = useState(false);
  const [open1, setOpen1] = useState(true);

  const f = () => {
    setOpen(true);
    setOpen1(false);
  };

  const i = () => {
    setOpen(false);
    setOpen1(true);
  };

  return (
    <div className="content">
      <div className="content--div">
        <img
          src="https://scontent.fevn11-1.fna.fbcdn.net/v/t39.30808-1/269669879_3137994416483686_4685938482215500696_n.jpg?stp=c0.0.148.148a_dst-jpg_p148x148&_nc_cat=104&ccb=1-7&_nc_sid=dbb9e7&_nc_ohc=DOJNKvi08RoAX9A5ExG&_nc_ht=scontent.fevn11-1.fna&oh=00_AT_zVWxaS-_KVhEnwNRFlvqjRSlgLhbp_kDG3MMb1S6u4A&oe=634B0AD7"
          style={{ width: 34, height: 34, marginLeft: 40 }}
        />
        <h3 style={{ marginLeft: 14 }}>Sedrak Qocharyan</h3>
      </div>
      <div className="content--div">
        <img
          src="https://static.xx.fbcdn.net/rsrc.php/v3/yj/r/tSXYIzZlfrS.png"
          style={{ width: 34, height: 34, marginLeft: 40 }}
        />
        <h3 style={{ marginLeft: 14 }}>Друзья</h3>
      </div>{" "}
      <div className="content--div">
        <img
          src="https://static.xx.fbcdn.net/rsrc.php/v3/yj/r/Im_0d7HFH4n.png"
          style={{ width: 34, height: 34, marginLeft: 40 }}
        />
        <h3 style={{ marginLeft: 14 }}>Группы</h3>
      </div>{" "}
      <div className="content--div">
        <img
          src="https://static.xx.fbcdn.net/rsrc.php/v3/y4/r/MN44Sm-CTHN.png"
          style={{ width: 34, height: 34, marginLeft: 40 }}
        />
        <h3 style={{ marginLeft: 14 }}>Marketplace</h3>
      </div>{" "}
      <div className="content--div">
        <img
          src="https://static.xx.fbcdn.net/rsrc.php/v3/y-/r/FhOLTyUFKwf.png"
          style={{ width: 34, height: 34, marginLeft: 40 }}
        />
        <h3 style={{ marginLeft: 14 }}>Watch</h3>
      </div>{" "}
      <div className="content--div">
        <img
          src="https://static.xx.fbcdn.net/rsrc.php/v3/yJ/r/tYxGXJRPH5q.png"
          style={{ width: 34, height: 34, marginLeft: 40 }}
        />
        <h3 style={{ marginLeft: 14 }}>Воспоминания</h3>
      </div>
      {open1 && (
        <div className="content--div background" onClick={() => f()}>
          <img
            src="https://icons-for-free.com/iconfiles/png/128/down+expand+expand+more+expandmore+icon-1320185733183690947.png"
            style={{ width: 34, height: 34, marginLeft: 40 }}
          />
          <h3 style={{ marginLeft: 14 }}>показать больше</h3>
        </div>
      )}
      {open && (
        <>
          <div className="content--div">
            <img
              src="https://static.xx.fbcdn.net/rsrc.php/v3/yk/r/Cx_zTHRcUJ0.png"
              style={{ width: 34, height: 34, marginLeft: 40 }}
            />
            <h3 style={{ marginLeft: 14 }}>Игровой видео</h3>
          </div>
          <div className="content--div">
            <img
              src="https://static.xx.fbcdn.net/rsrc.php/v3/yg/r/JQCVtO0LVjk.png"
              style={{ width: 34, height: 34, marginLeft: 40 }}
            />
            <h3 style={{ marginLeft: 14 }}>Игры</h3>
          </div>
          <div className="content--div">
            <img
              src="https://static.xx.fbcdn.net/rsrc.php/v3/yW/r/nbUcQfHcgBv.png"
              style={{ width: 34, height: 34, marginLeft: 40 }}
            />
            <h3 style={{ marginLeft: 14 }}>Избранное</h3>
          </div>
          <div className="content--div">
            <img
              src="https://static.xx.fbcdn.net/rsrc.php/v3/yZ/r/vG0kc45wHaG.png"
              style={{ width: 34, height: 34, marginLeft: 40 }}
            />
            <h3 style={{ marginLeft: 14 }}>Кризисное реагирование</h3>
          </div>
          <div className="content--div">
            <img
              src="https://static.xx.fbcdn.net/rsrc.php/v3/yj/r/QILj4kKZMLW.png"
              style={{ width: 34, height: 34, marginLeft: 40 }}
            />
            <h3 style={{ marginLeft: 14 }}>Мероприятия</h3>
          </div>
          <div className="content--div">
            <img
              src="https://static.xx.fbcdn.net/rsrc.php/v3/yI/r/cbPxeioybsd.png"
              style={{ width: 34, height: 34, marginLeft: 40 }}
            />
            <h3 style={{ marginLeft: 14 }}>Недавние действия с рекламой</h3>
          </div>
          <div className="content--div">
            <img
              src="https://static.xx.fbcdn.net/rsrc.php/v3/yF/r/kD5Sv0isIPs.png"
              style={{ width: 34, height: 34, marginLeft: 40 }}
            />
            <h3 style={{ marginLeft: 14 }}>Последние новости</h3>
          </div>
          <div className="content--div">
            <img
              src="https://static.xx.fbcdn.net/rsrc.php/v3/y1/r/VhoyAd0w8bZ.png"
              style={{ width: 34, height: 34, marginLeft: 40 }}
            />
            <h3 style={{ marginLeft: 14 }}>прямой эфир</h3>
          </div>
          <div className="content--div">
            <img
              src="https://static.xx.fbcdn.net/rsrc.php/v3/yP/r/FMv4tTIpfwB.png"
              style={{ width: 34, height: 34, marginLeft: 40 }}
            />
            <h3 style={{ marginLeft: 14 }}>Сборы пожертвований</h3>
          </div>
          <div className="content--div">
            <img
              src="https://static.xx.fbcdn.net/rsrc.php/v3/yA/r/KlDlsO3UxDM.png"
              style={{ width: 34, height: 34, marginLeft: 40 }}
            />
            <h3 style={{ marginLeft: 14 }}>Сохраненное</h3>
          </div>
          <div className="content--div">
            <img
              src="https://static.xx.fbcdn.net/rsrc.php/v3/yj/r/0gH3vbvr8Ee.png"
              style={{ width: 34, height: 34, marginLeft: 40 }}
            />
            <h3 style={{ marginLeft: 14 }}>Страницы</h3>
          </div>
          <div className="content--div">
            <img
              src="https://static.xx.fbcdn.net/rsrc.php/v3/yc/r/lqymE2iRETE.png"
              style={{ width: 34, height: 34, marginLeft: 40 }}
            />
            <h3 style={{ marginLeft: 14 }}>центр реклама</h3>
          </div>
          <div className="content--div">
            <img
              src="https://static.xx.fbcdn.net/rsrc.php/v3/y_/r/8S1zU2zserN.png"
              style={{ width: 34, height: 34, marginLeft: 40 }}
            />
            <h3 style={{ marginLeft: 14 }}>Цифровые коллекционные предметы</h3>
          </div>
          <div className="content--div">
            <img
              src="https://static.xx.fbcdn.net/rsrc.php/v3/yX/r/z2lQL_jKCWe.png"
              style={{ width: 34, height: 34, marginLeft: 40 }}
            />
            <h3 style={{ marginLeft: 14 }}>Эмоциональное здоровье</h3>
          </div>
          <div className="content--div">
            <img
              src="https://static.xx.fbcdn.net/rsrc.php/v3/yM/r/C949oxkze-S.png"
              style={{ width: 34, height: 34, marginLeft: 40 }}
            />
            <h3 style={{ marginLeft: 14 }}>Ads Manager</h3>
          </div>
          <div className="content--div">
            <img
              src="https://static.xx.fbcdn.net/rsrc.php/v3/yi/r/FZK_jEWapM0.png"
              style={{ width: 34, height: 34, marginLeft: 40 }}
            />
            <h3 style={{ marginLeft: 14 }}>COVID-19: Центр информации</h3>
          </div>
          <div className="content--div">
            <img
              src="https://static.xx.fbcdn.net/rsrc.php/v3/yM/r/vWBUs7aYAiK.png"
              style={{ width: 34, height: 34, marginLeft: 40 }}
            />
            <h3 style={{ marginLeft: 14 }}>Facebook Pay</h3>
          </div>
          <div className="content--div">
            <img
              src="https://static.xx.fbcdn.net/rsrc.php/v3/yv/r/ocBBGg-gRd5.png"
              style={{ width: 34, height: 34, marginLeft: 40 }}
            />
            <h3 style={{ marginLeft: 14 }}>Messages</h3>
          </div>
          <div
            className="content--div background"
            onClick={() => i()}
          >
            <img
              style={{ width: 34, height: 34, marginLeft: 40 }}
              src="https://icons-for-free.com/iconfiles/png/128/expand+expand+less+expandless+top+up+icon-1320185733356205582.png"
            />
            <h3 style={{ marginLeft: 14 }}> Показать меньше</h3>
          </div>
        </>
      )}
    </div>
  );
};

export default Content;
