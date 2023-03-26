import React from "react";
import { Link } from "react-router-dom";
import s from "./DropdownMenu.module.scss";
import { Container } from "../../Container/Container";
import { useSelector } from "react-redux";

export const DropdownMenu = ({ onMenuEnterHandler, onMenuLeaveHandler }) => {
  const { categories } = useSelector((state) => state.categoriesReducer);

  return (
    <div className={s.menu} onMouseEnter={onMenuEnterHandler} onMouseLeave={onMenuLeaveHandler}>
      <Container>
        <ul className={s.list}>
          {categories.map((el, i) => (
            <li className={s[`area${i}`]} key={el.id}>
              <Link
                to={`/category/${el.slug}`}
                className={s.list__link}
                onClick={onMenuLeaveHandler}
              >
                {el.name}
              </Link>
            </li>
          ))}
        </ul>
      </Container>
    </div>
  );
};
