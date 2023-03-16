import React from "react";
import s from "../Footer/Footer.module.scss";
import Facebook from "./images/Facebook.svg";
import Instagram from "./images/Instagram.svg";
import Ok from "./images/Ok.svg";
import VK from "./images/VK.svg";
import Tel from "./images/Tel.svg";
import Zasov from "./images/Zasov.svg";
import logosev from "./images/logosev.png";
import { Container } from "../Container/Container";
import { Link } from "react-router-dom";

export const Footer = () => {
  let data = [
    {
      to: "/about",
      name: "О компании",
    },
    {
      to: "/contacts",
      name: "Контакты",
    },
    {
      to: "/articles",
      name: "Статьи",
    },
    {
      to: "/vacancies",
      name: "Вакансии",
    },
    {
      to: "/policy",
      name: "Политика обработки персональных данных",
    },
  ];
  let src = [Instagram, VK, Facebook, Ok];
  return (
    <div className={s.wrapper}>
      <Container>
        <div className={s.footer}>
          <Link to="/">
            <img src={logosev} className={s.footer__logo_grid} alt="logo" />
          </Link>
          <ul className={s.footer__links_grid}>
            {data.map((el, ind) => (
              <li key={ind}>
                <Link to={el.to} className={s.footer__link}>
                  {el.name}
                </Link>
              </li>
            ))}
          </ul>
          <div className={s.footer__items_grid}>
            {src.map((el, ind) => (
              <a className={s.footer__item} key={ind}>
                <img src={el} alt="logo" className={s.footer__img} />
              </a>
            ))}
          </div>
          <div className={s.footer__contact_grid}>
            <a className={s.footer__tel} href="">
              <img src={Tel} alt="logo" />
            </a>
            <p className={s.footer__numbers}>8 800 777 33 33</p>
          </div>
          <div className={s.footer__design_grid}>
            <p className={s.footer__des}>Дизайн</p>
            <img src={Zasov} alt="logo" className={s.footer__deslogo} />
          </div>
        </div>
      </Container>
    </div>
  );
};
