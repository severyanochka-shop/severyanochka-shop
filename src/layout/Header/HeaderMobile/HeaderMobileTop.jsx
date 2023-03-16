import React from "react";
import { Link } from "react-router-dom";
import s from "./HeaderMobileTop.module.scss";
import logo_mobile from "../images/logos/logo_mobile.svg";
import { Container } from "../../Container/Container";

export const HeaderMobileTop = () => {
  return (
    <>
      <div className={s.header_top}>
        <Container>
          <div className={s.nav}>
            <Link to="/">
              <img src={logo_mobile} alt="ЛОГО" className={s.logo} />
            </Link>
            <input className={s.header_input} placeholder="Найти товар" />
          </div>
        </Container>
      </div>
    </>
  );
};
