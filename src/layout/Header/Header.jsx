import React from "react";
import { Link } from "react-router-dom";
import s from "./Header.module.scss";
import logo from "./images/logo.svg";
import menu from "./images/menu.svg";
import login from "./images/login.svg";
import favorites from "./images/favorites.svg";
import orders from "./images/orders.svg";
import cart from "./images/cart.svg";
import { HeaderButton } from "./HeaderButton/HeaderButton";
import { PictoButton } from "./PictoButton/PictoButton";
import { Container } from "../Container/Container";
import { DropdownMenu } from "./DropdownMenu/DropdownMenu";

export const Header = () => {
  return (
    <>
      {/* <DropdownMenu /> */}
      <div className={s.header}>
        <Container>
          <div className={s.nav}>
            <Link to="/">
              <img src={logo} alt="ЛОГО" className={s.logo} />
            </Link>
            <Link to="/category">
              <HeaderButton background="green">
                <div className={s.button__wrapper}>
                  <img src={menu} alt="|||" />
                  <span className={s.button__text}>Каталог</span>
                </div>
              </HeaderButton>
            </Link>
            <input className={s.header_input} placeholder="Найти товар" />
            <PictoButton text={"Избранное"} img={favorites} link="/favourites" />
            <PictoButton text={"Заказы"} img={orders} link="/orders" />
            <PictoButton text={"Корзина"} img={cart} link="/cart" />
            <Link to="/login">
              <HeaderButton background="orange">
                <div className={s.button__wrapper}>
                  <span className={s.button__text}>Войти</span>
                  <img src={login} alt="->" />
                </div>
              </HeaderButton>
            </Link>
          </div>
        </Container>
      </div>
    </>
  );
};
