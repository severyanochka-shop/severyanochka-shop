import React from "react";
import { Article } from "../Article/Article";
import { Container } from "../../layout/Container/Container";
import image1 from "../Article/assets/image1.jpg";
import image2 from "../Article/assets/image2.jpg";
import image3 from "../Article/assets/image3.jpg";
import s from "./ArticleWrapper.module.scss";

export const ArticleWrapper = () => {
  return (
    <Container>
      <div className={s.wrapper}>
        <Article
          image={image1}
          date="05.03.2021"
          title="Режим использования масок и перчаток на территории магазинов"
          text='Подробная информация о режимах использования масок и перчаток на территории магазинов "ЛЕНТА". Информация обновляется каждый будний день.'
        ></Article>
        <Article
          image={image2}
          date="05.03.2021"
          title="Весеннее настроение для каждой"
          text="8 Марта – это не просто Международный женский день, это ещё день тюльпанов, приятных сюрпризов и праздничных тёплых пожеланий."
        ></Article>
        <Article
          image={image3}
          date="22.02.2020"
          title="ЗОЖ или ФАСТФУД. А вы на чьей стороне? Голосуем!"
          text="Голосуйте за любимые категории, выбирайте категорию-победителя в мобильном приложении и получайте кешбэк 10% баллами в апреле!"
        ></Article>
      </div>
    </Container>
  );
};
