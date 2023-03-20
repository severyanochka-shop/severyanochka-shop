import clsx from "clsx";
import React from "react";
import { Link } from "react-router-dom";
import { Container } from "../../layout/Container/Container";
import { Section } from "../../layout/Section/Section";
import { Button } from "../../ui/Button/Button";
import s from './NotFound.module.scss'

export const NotFound = () => {
  return (
    <Section>
      <Container>
        <div className={clsx(s.wrapper)}>
          <h1>Страница не найдена!</h1>
          <Link to='/'>
            <Button large background="orange">
              На главную
            </Button>
          </Link>
        </div>
      </Container>
    </Section>
  );
};
