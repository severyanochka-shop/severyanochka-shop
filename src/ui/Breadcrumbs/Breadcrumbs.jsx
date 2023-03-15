import React from "react";
import { Link, useMatches } from "react-router-dom";
import { Container } from "../../layout/Container/Container";
import s from "./Breadcrumbs.module.scss";
import arrow from "./images/arrow.svg";

export const Breadcrumbs = () => {
  let matches = useMatches();
  let crumbs = matches
    .filter((match) => Boolean(match.handle?.crumb))
    .map((match) => match.handle.crumb(match.data));
  console.log(crumbs);
  return (
    <Container>
      <nav>
        <ul className={s.breadcrumbs}>
          {crumbs.map((crumb, index) => (
            <li className={s.crumb} key={index}>
              {crumb}
              {!!index + 1 && <img className={s.arrow} src={arrow} alt=">" />}
            </li>
          ))}
        </ul>
      </nav>
    </Container>
  );
};
