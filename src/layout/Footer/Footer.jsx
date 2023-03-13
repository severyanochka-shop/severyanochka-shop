import React from "react";
import s from "../Footer/Footer.module.scss";
import Facebook from "./images/Facebook.svg";
import Instagram from "./images/Instagram.svg";
import Ok from "./images/Ok.svg";
import VK from "./images/VK.svg";
import Tel from "./images/Tel.svg";
import zas4x from './images/zas4x.png'
import logosev from './images/logosev.png'

export const Footer = () => {
  let data = [
    "О компании",
    "Контакты",
    "Вакансии",
    "Статьи",
    "Политика обработки персональных данных",
  ];
    return (
      <>
        <div className={s.footer}>
          <img src={logosev} className={s.footer__logo} alt="logo" />
          {/* <div className={s.footer__links}> */}
          <ul className={s.footer__links}>
            {data.map((el, ind) => (
              <li key={ind}>
                <a href="#" className={s.footer__link}>
                  {el}
                </a>
              </li>
            ))}
          </ul>
          {/* <a href="#" className={s.footer__link}>
              О компании
            </a>
            <a className={s.footer__link} href="#">
              Контакты
            </a>
            <a className={s.footer__link} href="#">
              Вакансии
            </a>
            <a className={s.footer__link} href="#">
              Статьи
            </a>
            <a className={s.footer__link} href="#">
              Политика обработки персональных данных
            </a> */}
          {/* </div> */}
          <div className={s.footer__items}>
            <a className={s.footer__item} href="">
              <img src={Instagram} alt="logo" />
            </a>
            <a className={s.footer__item} href="">
              <img src={VK} alt="logo" />
            </a>
            <a className={s.footer__item} href="">
              <img src={Facebook} alt="logo" />
            </a>
            <a className={s.footer__item} href="">
              <img src={Ok} alt="logo" />
            </a>
          </div>
          <div className={s.footer__contact}>
            <a className={s.footer__tel} href="">
              <img src={Tel} alt="logo" />
            </a>
            <p className={s.footer__numbers}>8 800 777 33 33</p>
          </div>
          <div className={s.footer__design}>
            <p className={s.footer__des}>Дизайн</p>
            <img src={zas4x} alt="logo" className={s.footer__deslogo} />
          </div>
        </div>
      </>
    );
};
