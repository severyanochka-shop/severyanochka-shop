import React, { useState } from "react";
import s from "./OurShops.module.scss";
import voshod from "./assets/voshod.svg";
import parus from "./assets/parus.svg";
import rjaba from "./assets/rjabina.svg";
import los from "./assets/pellis.svg";
import { ContactItem } from "../ContactItem/ContactItem";
import { YMaps } from "@pbe/react-yandex-maps";
import { YandexMaps } from "../YandexMaps/YandexMaps";
import { useLocation } from "react-router-dom";

export const OurShops = () => {
  const [active, setActive] = useState("shel");
  const location = useLocation();

  const handleClick = (e) => {
    setActive(e.target.id);
  };

  const background = (id) => {
    return { backgroundColor: active === id ? "#70c05b" : "rgba(243, 242, 241, 1)" };
  };

  const shops = [
    {
      name: "п.Щельяюр",
      id: "shel",
      adress: "ул.Дорожная",
      phone: "+79042713590",
      img: { src: voshod, alt: "Восход" },
    },
    {
      name: "д.Вертеп",
      id: "vert",
      adress: "ул. Советская 87",
      phone: "+7 8214091330",
      img: { src: parus, alt: "Парус" },
    },
    {
      name: "с.Краснобор",
      id: "kras",
      adress: "ул. Заводская 16",
      phone: "+7 8214091101",
      img: { src: rjaba, alt: "Рябинушка" },
    },
    {
      name: "д.Диюр",
      id: "diur",
      adress: "ул. Рабочая 1",
      phone: "+7 8214091300",
      img: { src: los, alt: "Пелысь" },
    },
  ];
  return (
    <div className={s.ourshops}>
      <div className={s.item2}>
        {shops.map((el, i) => (
          <button
            key={i}
            id={el.id}
            onClick={handleClick}
            className={s.location__btn}
            style={background(el.id)}
          >
            {el.name}
          </button>
        ))}
      </div>
      {location.pathname === "/" ? null : (
        <div className={s.item3}>
          {shops.map((el, i) => (
            <ContactItem
              key={i.toString()}
              adress={el.adress}
              phone={el.phone}
              img={el.img.src}
              alt={el.img.alt}
            />
          ))}
        </div>
      )}
      <YMaps>
        <YandexMaps width="100%" height="354px" />
      </YMaps>
    </div>
  );
};
