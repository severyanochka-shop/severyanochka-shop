import React from "react";
import { Link } from "react-router-dom";
import s from "./HeaderMobileTop.module.scss";
import logo_mobile from "../images/logos/logo_mobile.svg";
import { Container } from "../../Container/Container";
import { Textfield } from "../../../ui/Textfield/Textfield";

export const HeaderMobileTop = () => {
  return (
    <>
      <div className={s.header_top}>
        <Container>
          <div className={s.nav}>
            <Link to="/">
              <img src={logo_mobile} alt="ЛОГО" className={s.logo} />
            </Link>
              <Textfield placeholder={"Найти товар"} className={s.header_input} mobile />
          </div>
        </Container>
      </div>
    </>
  );
};
