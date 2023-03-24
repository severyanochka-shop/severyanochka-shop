import React from "react";
import { useState } from "react";
import { Link } from "react-router-dom";
import s from "./Header.module.scss";
import logo_desktop from "./assets/logos/logo_desktop.svg";
import logo_tablet from "./assets/logos/logo_tablet.svg";
import menu from "./assets/menu.svg";
import login from "./assets/login.svg";
import favorites from "./assets/pictograms/favorites.svg";
import orders from "./assets/pictograms/orders.svg";
import cart from "./assets/pictograms/cart.svg";
import favorites_hover from "./assets/pictograms/favorites_hover.svg";
import orders_hover from "./assets/pictograms/orders_hover.svg";
import cart_hover from "./assets/pictograms/cart_hover.svg";
import { HeaderButton } from "./HeaderButton/HeaderButton";
import { PictoButton } from "./PictoButton/PictoButton";
import { Container } from "../Container/Container";
import { Textfield } from "../../ui/Textfield/Textfield";
import { DropdownMenu } from "./DropdownMenu/DropdownMenu";

export const Header = () => {
  const [menuIsOn, setDropdownMenu] = useState(false);
  const [DDmenuIsOn, setDDDropdownMenu] = useState(false);
  const onMouseEnterHandler = () => setDropdownMenu(true);
  const onMouseLeaveHandler = () =>
    setTimeout(() => {
      if (DDmenuIsOn === false) {
        setDropdownMenu(false);
      }
    }, 500);

  const DDonMouseEnterHandler = () => setDDDropdownMenu(true);
  const DDonMouseLeaveHandler = () => {
    setDDDropdownMenu(false);
    setDropdownMenu(false);
  };
  console.log(`menuIsOn=${menuIsOn}`);
  console.log(`DDmenuIsOn=${DDmenuIsOn}`);
  return (
    <>
      {menuIsOn && DDmenuIsOn && (
        <DropdownMenu
          DDhandlerOn={DDonMouseEnterHandler}
          DDhandlerOff={DDonMouseLeaveHandler}
          handlerOff={onMouseLeaveHandler}
        />
      )}

      <div className={s.header}>
        <Container>
          <div className={s.nav}>
            <Link to="/">
              <picture>
                <source media="(max-width: 1279px)" srcSet={logo_tablet} sizes="1279px" />
                <source media="(min-width: 1280px)" srcSet={logo_desktop} sizes="1280px" />
                <img src={logo_desktop} alt="ЛОГО" className={s.logo} />
              </picture>
            </Link>
            <Link to="/category">
              <HeaderButton
                background="green"
                handlerOn={onMouseEnterHandler}
                handlerOff={onMouseLeaveHandler}
              >
                <div className={s.button__wrapper}>
                  <img src={menu} alt="|||" />
                  <span className={s.button__text}>Каталог</span>
                </div>
              </HeaderButton>
            </Link>
            <Textfield placeholder={"Найти товар"} header />
            <Link to="/favourites">
              <PictoButton text={"Избранное"} img={favorites} img_hover={favorites_hover} />
            </Link>
            <Link to="/orders">
              <PictoButton text={"Заказы"} img={orders} img_hover={orders_hover} />
            </Link>
            <Link to="/cart">
              <PictoButton text={"Корзина"} img={cart} img_hover={cart_hover} />
            </Link>
            <Link to="/login">
              <HeaderButton background="orange">
                <div className={`${s.button__wrapper} ${s.large}`}>
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
