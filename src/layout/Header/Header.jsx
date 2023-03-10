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
import name from "./images/name.svg";
import { HeaderButton } from "./HeaderButton/HeaderButton";

import { Container } from "../Container/Container";

export const Header = ({ handler }) => {
  return (
    <div className={s.header}>
      <Container>
        <Link to="/">
          <img src={logo} alt="ЛОГО" className={s.img_logo} />
          <img src={name} alt="Северяночка" className={s.img_name} />
        </Link>
        <Link to="/">
          <HeaderButton handler background="green">
            <div className={s.button__catalogue}>
              <img src={menu} alt="|||" />
              <p className={s.button__text}>Каталог</p>
            </div>
          </HeaderButton>
        </Link>
      </Container>
    </div>
  );
};
