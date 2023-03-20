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
  return (
    crumbs.length > 1 && (
      <Container>
        <nav>
          <ul className={s.breadcrumbs}>
            {crumbs.map((crumb, index) => (
              <li className={s.list_item} key={crumb.props.to}>
                {!!index && <img className={s.arrow} src={arrow} alt=">" />}
                <Link to={crumb.props.to} className={s.link}>
                  {crumb.props.children}
                </Link>
              </li>
            ))}
          </ul>
        </nav>
      </Container>
    )
  );
};
