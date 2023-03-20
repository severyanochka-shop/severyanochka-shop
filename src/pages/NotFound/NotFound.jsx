import clsx from "clsx";
import React, { useState } from "react";
import { Link } from "react-router-dom";
import { Container } from "../../layout/Container/Container";
import { Section } from "../../layout/Section/Section";
import { Button } from "../../ui/Button/Button";
import s from "./NotFound.module.scss";
import logo from "./assets/logo.svg";

export const NotFound = () => {
  const [counter, setCounter] = useState(0);

  const easterEgg = () => {
    return setCounter(counter + 1);
  };

  return (
    <Section className={clsx(s.notfound)}>
      <Container>
        <div className={clsx(s.wrapper)}>
            <div className={clsx(s.btn__wrapper)}>
              <h1 className={clsx(s.title)}>Страница не найдена!</h1>
              <Link to="/">
                <Button className={s.btn} large background="orange">
                  На главную
                </Button>
              </Link>
            </div>
            <div
              onClick={easterEgg}
              className={clsx(s.rotating, s.img__wrapper, {
                [s.turbo]: counter >= 3,
                [s.nitro]: counter >= 6,
              })}
            >
              <img className={clsx(s.img)} src={logo} alt="" />
            </div>
          </div>
      </Container>
    </Section>
  );
};
