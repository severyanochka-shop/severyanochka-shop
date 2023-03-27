import React, { useState } from "react";
import s from "./Contacts.module.scss";
import voshod from "./assets/voshod.svg";
import parus from "./assets/parus.svg";
import rjaba from "./assets/rjabina.svg";
import los from "./assets/pellis.svg";
import { ContactItem } from "../ContactItem/ContactItem";
import { YMaps } from "@pbe/react-yandex-maps";
import { YandexMaps } from "../YandexMaps/YandexMaps";

export const Contacts = () => {
  const [active, setActive] = useState("shel");

  const handleClick = (e) => {
    setActive(e.target.id);
  };

  const background = (id) => {
    return { backgroundColor: active === id ? "#70c05b" : "rgba(243, 242, 241, 1)" };
  };

  return (
    <div className={s.contacts}>
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
        {[
          { name: "п.Щельяюр", id: "shel" },
          { name: "д.Вертеп", id: "vert" },
          { name: "с.Краснобор", id: "kras" },
          { name: "д.Диюр", id: "diur" },
        ].map((el) => (
          <>
            <button
              id={el.id}
              onClick={handleClick}
              className={s.location__btn}
              style={background(el.id)}
            >
              {el.name}
            </button>
          </>
        ))}
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
  );
};
