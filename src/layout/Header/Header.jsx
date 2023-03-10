import React from "react";
import { Link } from "react-router-dom";
import s from "./Header.module.scss";
import logo from "./images/logo.svg";
import menu from "./images/menu.svg";
import login from "./images/login.svg";
import favorites from "./images/favorites.svg";
import orders from "./images/orders.svg";
import cart from "./images/cart.svg";
import avatar from "./images/avatar.png";
import { HeaderButton } from "./HeaderButton/HeaderButton";
import { PictoButton } from "./PictoButton/PictoButton";
import { Container } from "../Container/Container";

export const Header = ({ handler }) => {
  return (
    <div className={s.header}>
      <Container>
        <div className={s.nav}>
          <Link to="/">
            <img src={logo} alt="ЛОГО" className={s.logo} />
          </Link>
          <Link to="/catalogue">
            <HeaderButton handler background="green">
              <div className={s.button__catalogue}>
                <img src={menu} alt="|||" />
                <p className={s.button__text}>Каталог</p>
              </div>
            </HeaderButton>
          </Link>
          <input className={s.header_input} placeholder="Найти товар" />
          <PictoButton text={"Избранное"} img={favorites} link="/favorites" />
          <PictoButton text={"Заказы"} img={orders} link="/orders" />
          <PictoButton text={"Корзина"} img={cart} link="/shopping-cart" />
          <Link to="/login">
            <HeaderButton handler background="orange">
              <div className={s.button__catalogue}>
                <p className={s.button__text}>Войти</p>
                <img src={login} alt="->" />
              </div>
            </HeaderButton>
          </Link>
        </div>
      </Container>
    </div>
  );
};
