import React from "react";
import s from "../Footer/Footer.module.scss";
import Facebook from "./images/Facebook.svg";
import Instagram from "./images/Instagram.svg";
import Ok from "./images/Ok.svg";
import VK from "./images/VK.svg";
import Tel from "./images/Tel.svg";

export const Footer = () => {
  return (
    <div className={s.footer}>
      <a href="#" className={s.footer__link}>
        О компании
      </a>
      <a href="#">Контакты</a>
      <a href="#">Вакансии</a>
      <a href="#">Статьи</a>
      <a href="#">Политика обработки персональных данных</a>
      <a className={s.footer__link} href="">
        <img src={Instagram} alt="logo" width="20" height="20" />
      </a>
      <a className={s.footer__link} href="">
        <img src={VK} alt="logo" width="20" height="20" />
      </a>
      <a className={s.footer__link} href="">
        <img src={Facebook} alt="logo" width="20" height="20" />
      </a>
      <a className={s.footer__link} href="">
        <img src={Ok} alt="logo" width="20" height="20" />
      </a>
      <div>
        <a className={s.footer__link} href="">
          <img src={Tel} alt="logo" width="20" height="20" />
        </a>
        <p>8 800 777 33 33</p>
      </div>
    </div>
  );
};
