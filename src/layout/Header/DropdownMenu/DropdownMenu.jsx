import React from "react";
import { Link } from "react-router-dom";
import s from "./DropdownMenu.module.scss";
import { Container } from "../../Container/Container";
import data from "../data/categories.json";

export const DropdownMenu = ({ DDhandlerOn, DDhandlerOff }) => {
  return (
    <div className={s.menu} onMouseEnter={DDhandlerOn} onMouseLeave={DDhandlerOff}>
      <Container>
        <ul className={s.list}>
          {data.map((el, i) => (
            <li className={s[`area${i}`]} key={el.id}>
              <Link to="/" className={s.list__link}>
                {el.name}
              </Link>
            </li>
          ))}
        </ul>
      </Container>
    </div>
  );
};
