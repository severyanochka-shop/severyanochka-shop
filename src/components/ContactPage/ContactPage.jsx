import React from "react";
import s from "./ContactPage.module.scss";
import map from "./Image/map.svg";
import adopmap from "./Image/adopt.jpg";
import voshod from "./Image/voshod.svg";
import parus from "./Image/parus.svg";
import rjaba from "./Image/rjabina.svg";
import los from "./Image/pellis.svg";

export const ContactPage = () => {
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
            <span className={s.box__text}>Бухгалтерия, склад</span>
            <p className={s.box__tel}>+7 82140 92619</p>
          </div>
          <div className={s.box}>
            <img
              className={s.box__img}
              src={require("./Image/percent.png")}
              alt="%"
            />{" "}
            <span className={s.box__text}>Вопросы по системе лояльности</span>
            <p className={s.box__tel}>+7 908 716 33 97</p>
          </div>
        </div>
        <h3 className={s.contacts__subtitle}>Наши магазины</h3>
        <div className={s.item2}>
          <button className={s.location__btn}>п.Щельяюр</button>
          <button className={s.location__btn}>д.Вертеп</button>
          <button className={s.location__btn}>с.Краснобор</button>
          <button className={s.location__btn}>д.Диюр</button>
        </div>
        <div className={s.item3}>
          <img src={voshod} alt="Восход" />
          <img src={parus} alt="Парус" />
          <img src={rjaba} alt="Рябинушка" />
          <img src={los} alt="Пелысь" />
        </div>
        <div className={s.item4}>
          <picture>
            <source media="(max-width: 880)" srcset={adopmap} />
            <source media="(min-width: 881)" srcset={map} />
            <img src={map} alt="Карта" />
          </picture>
        </div>
      </div>
    </div>
  );
};
