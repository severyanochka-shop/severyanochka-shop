import React from "react";
import { Link } from "react-router-dom";
import s from "./DropdownMenu.module.scss";
import { Container } from "../../Container/Container";
import { data } from "../data/datanew.js";

export const DropdownMenu = () => {
  return (
    <div className={s.menu}>
      <Container>
        <ul className={s.list}>
          {data.map((el, i) => (
            <li key={el.id}>
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
