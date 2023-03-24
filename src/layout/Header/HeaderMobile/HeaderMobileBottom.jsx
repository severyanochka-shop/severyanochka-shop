import React from "react";
import { useState } from "react";
import { Link } from "react-router-dom";
import s from "./HeaderMobileBottom.module.scss";
import login from "../assets/login.svg";
import favorites from "../assets/pictograms/favorites.svg";
import orders from "../assets/pictograms/orders.svg";
import cart from "../assets/pictograms/cart.svg";
import catalog from "../assets/pictograms/catalog.svg";
import favorites_hover from "../assets/pictograms/favorites_hover.svg";
import orders_hover from "../assets/pictograms/orders_hover.svg";
import cart_hover from "../assets/pictograms/cart_hover.svg";
import catalog_hover from "../assets/pictograms/catalog_hover.svg";
import { HeaderButton } from "../HeaderButton/HeaderButton";
import { PictoButton } from "../PictoButton/PictoButton";
import { Container } from "../../Container/Container";
import { DropdownMenu } from "../DropdownMenu/DropdownMenu";

export const HeaderMobileBottom = () => {
  const [isButtonHover, setButtonHover] = useState(false);
  const [isMenuHover, setMenuHover] = useState(false);

  const onButtonEnterHandler = () => setButtonHover(true);
  const onButtonLeaveHandler = () =>
    setTimeout(() => {
      if (isMenuHover === false) {
        setButtonHover(false);
      }
    }, 200);

  const onMenuEnterHandler = () => setMenuHover(true);
  const onMenuLeaveHandler = () => {
    setMenuHover(false);
    setButtonHover(false);
  };

  return (
    <>
      {(isButtonHover || isMenuHover) && (
        <DropdownMenu
          onMenuEnterHandler={onMenuEnterHandler}
          onMenuLeaveHandler={onMenuLeaveHandler}
        />
      )}
      <div className={s.header_bottom}>
        <Container>
          <div className={s.nav}>
            <Link to="/category">
              <PictoButton
                text={"Каталог"}
                img={catalog}
                img_hover={catalog_hover}
                onButtonEnterHandler={onButtonEnterHandler}
                onButtonLeaveHandler={onButtonLeaveHandler}
              />
            </Link>
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
                <div className={s.button__wrapper}>
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
