import React from "react";
import { useState } from "react";
import { Link, useHref } from "react-router-dom";
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
import { TextField } from "../../ui/TextField/TextField";
import { DropdownMenu } from "./DropdownMenu/DropdownMenu";
import { Modal } from "../Modal/Modal";
import { AuthorizationForm } from "../../components/Form/AuthorizationForm/AuthorizationForm";

export const Header = () => {
  const href = useHref();
  const [isButtonHover, setButtonHover] = useState(false);
  const [isMenuHover, setMenuHover] = useState(false);

  const [isModal, setIsModal] = useState(false);
  const handleClose = () => {
    setIsModal(!isModal);
  };

  const onButtonEnterHandler = () => setButtonHover(true);

  const onButtonLeaveHandler = () =>
    setTimeout(() => {
      if (!isMenuHover) setButtonHover(false);
    }, 200);

  const onMenuEnterHandler = () => {
    document.body.style.overflow = "hidden";
    setMenuHover(true);
  };

  const onMenuLeaveHandler = () => {
    document.body.style.overflow = "visible";
    setMenuHover(false);
    setButtonHover(false);
  };

  return (
    <>
      {(isButtonHover || isMenuHover) && href !== "/category" && (
        <DropdownMenu
          onMenuEnterHandler={onMenuEnterHandler}
          onMenuLeaveHandler={onMenuLeaveHandler}
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
                onButtonEnterHandler={onButtonEnterHandler}
                onButtonLeaveHandler={onButtonLeaveHandler}
              >
                <div className={s.button__wrapper}>
                  <img src={menu} alt="|||" />
                  <span className={s.button__text}>Каталог</span>
                </div>
              </HeaderButton>
            </Link>
            <TextField placeholder={"Найти товар"} header />
            <Link to="/favourites">
              <PictoButton text={"Избранное"} img={favorites} img_hover={favorites_hover} />
            </Link>
            <Link to="/orders">
              <PictoButton text={"Заказы"} img={orders} img_hover={orders_hover} />
            </Link>
            <Link to="/cart">
              <PictoButton text={"Корзина"} img={cart} img_hover={cart_hover} />
            </Link>
            <HeaderButton background="orange" onClick={handleClose}>
              <div className={`${s.button__wrapper} ${s.large}`}>
                <span className={s.button__text}>Войти</span>
                <img src={login} alt="->" />
              </div>
            </HeaderButton>
          </div>
        </Container>
        {isModal && <Modal handleClose={handleClose} children={<AuthorizationForm />} />}
      </div>
    </>
  );
};
