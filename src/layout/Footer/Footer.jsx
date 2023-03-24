import React from "react";
import s from "../Footer/Footer.module.scss";
import Facebook from "./assets/Facebook.svg";
import Instagram from "./assets/Instagram.svg";
import Ok from "./assets/Ok.svg";
import VK from "./assets/VK.svg";
import Tel from "./assets/Tel.svg";
import Zasov from "./assets/Zasov.svg";
import logo from "./assets/logo.svg";
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
      to: "/vacancies",
      name: "Вакансии",
    },
    {
      to: "/articles",
      name: "Статьи",
    },
    {
      to: "/policy",
      name: "Политика обработки персональных данных",
    },
  ];
  let src = [
    {
      img: Instagram,
      to: 'https://www.instagram.com/saintcode_/'
    },
    {
      img: VK,
      to: 'https://vk.com/public191201156',
    }, 
    {
      img: Facebook,
      to: 'https://t.me/scbootcamp'
    },
    {
      img: Ok,
      to: 'https://www.youtube.com/channel/UCv4mpiZ_MRJaotjfkjfscJw'
  }];
  return (
    <div className={s.wrapper}>
      <Container>
        <div className={s.footer}>
          <Link className={s.footer__logo_grid_wrapper} to="/">
            <img src={logo} className={s.footer__logo_grid} alt="logo" />
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
              <a className={s.footer__item} key={ind} href={el.to}>
                <img src={el.img} alt="logo" className={s.footer__img} />
              </a>
            ))}
          </div>
          <div className={s.footer__contact_grid}>
            <a className={s.footer__tel} href="tel:88007773333">
              <img src={Tel} alt="logo" />
              <p>8 800 777 33 33</p>
            </a>
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
