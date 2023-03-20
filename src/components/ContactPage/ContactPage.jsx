import React, { useState } from "react";
import s from "./ContactPage.module.scss";
import map from "./Image/map.svg";
import minmap from "./Image/minmap.jpg";
import voshod from "./Image/voshod.svg";
import voshodonmap from "./Image/voshodonmap.svg";
import parus from "./Image/parus.svg";
import rjaba from "./Image/rjabina.svg";
import los from "./Image/pellis.svg";
import parusonmap from "./Image/parusonmap.svg";
import rjabaonmap from "./Image/rjabaonmap.svg";
import pelisonmap from "./Image/pelisonmap.svg";
import { ContactItem } from "../ContactItem/ContactItem";

export const ContactPage = () => {
  const [active, setActive] = useState("shel");

  const handleClick = (e) => {
    setActive(e.target.id);
  };

  return (
    <div className={s.contacts}>
      <h2 className={s.contacts__title}>Контакты</h2>
      <div className={s.contact}>
        <div className={s.item1}>
          <div className={s.box}>
            <img
              className={s.box__img}
              src={require("./Image/home.png")}
              alt="home"
            />{" "}
            <span className={(s.box__text, s.first)}>Бухгалтерия, склад</span>
            <a className={s.box__tel} href="tel:88214092619">
              +7 8214092619
            </a>
          </div>
          <div className={s.box}>
            <img
              className={s.box__img}
              src={require("./Image/percent.png")}
              alt="%"
            />{" "}
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
              backgroundColor:
                active === "shel" ? "#70c05b" : "rgba(243, 242, 241, 1)",
            }}
            className={s.location__btn}
          >
            п.Щельяюр
          </button>
          <button
            id={"vert"}
            onClick={handleClick}
            style={{
              backgroundColor:
                active === "vert" ? "#70c05b" : "rgba(243, 242, 241, 1)",
            }}
            className={s.location__btn}
          >
            д.Вертеп
          </button>
          <button
            id={"kras"}
            onClick={handleClick}
            style={{
              backgroundColor:
                active === "kras" ? "#70c05b" : "rgba(243, 242, 241, 1)",
            }}
            className={s.location__btn}
          >
            с.Краснобор
          </button>
          <button
            id={"diur"}
            onClick={handleClick}
            style={{
              backgroundColor:
                active === "diur" ? "#70c05b" : "rgba(243, 242, 241, 1)",
            }}
            className={s.location__btn}
          >
            д.Диюр
          </button>
        </div>
        <div className={s.item3}>
          <ContactItem
            adress={"ул.Дорожная"}
            phone={"+79042713590"}
            img={voshod}
          />
          <ContactItem
            adress={"ул. Советская 87"}
            phone={"+7 8214091330"}
            img={parus}
          />
          <ContactItem
            adress={"ул. Заводская 16"}
            phone={"+7 8214091101"}
            img={rjaba}
          />
          <ContactItem
            adress={"ул. Рабочая 1"}
            phone={"+7 8214091300"}
            img={los}
          />
        </div>
        <div className={s.item4}>
          <picture className={s.item4__picture}>
            <source media="(max-width: 450px)" srcSet={minmap} />
            <source media="(max-width: 1100px)" srcSet={map} />
            <img src={map} alt="Карта" />
          </picture>
          <img className={s.item4__voshod} src={voshodonmap} alt="voshod" />
          <img className={s.item4__parus} src={parusonmap} alt="parus" />
          <img className={s.item4__rjaba} src={rjabaonmap} alt="parus" />
          <img className={s.item4__pelis} src={pelisonmap} alt="parus" />
        </div>
      </div>
    </div>
  );
};
