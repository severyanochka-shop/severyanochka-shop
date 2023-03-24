import React, { useState } from "react";
import s from "./Contacts.module.scss";
// import map from "./assets/map.svg";
// import minmap from "./assets/minmap.jpg";
import voshod from "./assets/voshod.svg";
// import voshodonmap from "./assets/voshodonmap.svg";
import parus from "./assets/parus.svg";
import rjaba from "./assets/rjabina.svg";
import los from "./assets/pellis.svg";
// import parusonmap from "./assets/parusonmap.svg";
// import rjabaonmap from "./assets/rjabaonmap.svg";
// import pelisonmap from "./assets/pelisonmap.svg";
import { ContactItem } from "../ContactItem/ContactItem";
import { YMaps } from "@pbe/react-yandex-maps";
import { YandexMaps } from "../YandexMaps/YandexMaps";

export const Contacts = () => {
  const [active, setActive] = useState("shel");

  const handleClick = (e) => {
    setActive(e.target.id);
  };

  return (
    <div className={s.contacts}>
      <div className={s.contact}>
        <div className={s.item1}>
          <div className={s.box}>
            <img className={s.box__img} src={require("./assets/home.png")} alt="home" />
            <span className={(s.box__text, s.first)}>Бухгалтерия, склад</span>
            <a className={s.box__tel} href="tel:88214092619">
              +7 8214092619
            </a>
          </div>
          <div className={s.box}>
            <img className={s.box__img} src={require("./assets/percent.png")} alt="%" />
            <span className={s.box__text}>Вопросы по системе лояльности</span>
            <a className={s.box__tel} href="tel:89087163397">
              +7 908 716 33 97
            </a>
          </div>
        </div>
        <h3 className={s.contacts__subtitle}>Наши магазины</h3>
        <div className={s.item2}>
          <button
            id={"shel"}
            onClick={handleClick}
            style={{
              backgroundColor: active === "shel" ? "#70c05b" : "rgba(243, 242, 241, 1)",
            }}
            className={s.location__btn}
          >
            п.Щельяюр
          </button>
          <button
            id={"vert"}
            onClick={handleClick}
            style={{
              backgroundColor: active === "vert" ? "#70c05b" : "rgba(243, 242, 241, 1)",
            }}
            className={s.location__btn}
          >
            д.Вертеп
          </button>
          <button
            id={"kras"}
            onClick={handleClick}
            style={{
              backgroundColor: active === "kras" ? "#70c05b" : "rgba(243, 242, 241, 1)",
            }}
            className={s.location__btn}
          >
            с.Краснобор
          </button>
          <button
            id={"diur"}
            onClick={handleClick}
            style={{
              backgroundColor: active === "diur" ? "#70c05b" : "rgba(243, 242, 241, 1)",
            }}
            className={s.location__btn}
          >
            д.Диюр
          </button>
        </div>
        <div className={s.item3}>
          <ContactItem adress={"ул.Дорожная"} phone={"+79042713590"} img={voshod} />
          <ContactItem adress={"ул. Советская 87"} phone={"+7 8214091330"} img={parus} />
          <ContactItem adress={"ул. Заводская 16"} phone={"+7 8214091101"} img={rjaba} />
          <ContactItem adress={"ул. Рабочая 1"} phone={"+7 8214091300"} img={los} />
        </div>
        <YMaps>
          <YandexMaps width="1208px" height="354px" />
        </YMaps>
      </div>
    </div>
  );
};
