import React from "react";
import { Link } from "react-router-dom";
import s from "./Header.module.scss";
import logo_desktop from "./images/logos/logo_desktop.svg";
import logo_tablet from "./images/logos/logo_tablet.svg";
import menu from "./images/menu.svg";
import login from "./images/login.svg";
import favorites from "./images/pictograms/favorites.svg";
import orders from "./images/pictograms/orders.svg";
import cart from "./images/pictograms/cart.svg";
import favorites_hover from "./images/pictograms/favorites_hover.svg";
import orders_hover from "./images/pictograms/orders_hover.svg";
import cart_hover from "./images/pictograms/cart_hover.svg";
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
              <picture>
                <source media="(max-width: 1279px)" srcset={logo_tablet} sizes="1279px" />
                <source media="(min-width: 1280px)" srcset={logo_desktop} sizes="1280px" />
                <img src={logo_desktop} alt="ЛОГО" className={s.logo} />
              </picture>
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
            <PictoButton
              text={"Избранное"}
              img={favorites}
              img_hover={favorites_hover}
              link="/favorites"
            />
            <PictoButton text={"Заказы"} img={orders} img_hover={orders_hover} link="/orders" />
            <PictoButton text={"Корзина"} img={cart} img_hover={cart_hover} link="/shopping-cart" />
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
