import React from "react";
import { ArticlesComponent } from "../../components/ArticlesComponent/ArticlesComponent";
import { Container } from "../../layout/Container/Container";
import { Title } from "../../layout/Title/Title";
import image1 from "./assets/image1.jpg";
import image2 from "./assets/image2.jpg";
import image3 from "./assets/image3.jpg";

export const Articles = () => {
  return (
    <Container>
      <Title>Статьи</Title>
      <ArticlesComponent
        image={image1}
        date="05.03.2021"
        title="Режим использования масок и перчаток на территории магазинов"
        text='12 мая во многих регионах России вводится масочный режим. С этого дня нужно обязательно носить маски и перчатки в транспорте, общественных местах и на работе. За нарушение этой меры в Москве введен штраф в размере 4 тысяч рублей. Подробная информация о режимах использования масок и перчаток на территории магазинов "ЛЕНТА". Информация обновляется каждый будний день.'
      ></ArticlesComponent>
      <ArticlesComponent
        image={image2}
        date="05.03.2021"
        title="Весеннее настроение для каждой"
        text="8 Марта – это не просто Международный женский день, это ещё день тюльпанов, приятных сюрпризов и праздничных тёплых пожеланий. Ежегодному празднованию Международного женского дня положила начало Вторая Международная конференция социалисток, состоявшаяся в Копенгагене в 1910 году. Праздновать этот день предложила Клара Цеткин. Одной из целей была обозначена борьба за всеобщее избирательное право для женщин. Предложение получило единодушную поддержку более 100 женщин из 17 стран, однако дата празднования зафиксирована не была. До 1914 года в разных странах этот день отмечали в различные числа марта. "
      ></ArticlesComponent>
      <ArticlesComponent
        image={image3}
        date="22.02.2020"
        title="ЗОЖ или ФАСТФУД. А вы на чьей стороне? Голосуем!"
        text="Голосуйте за любимые категории, выбирайте категорию-победителя в мобильном приложении и получайте кешбэк 10% баллами в апреле! Американские учёные связали фастфуд с психическими расстройствами. По данным исследователей из Университета Лома Линда в США, любители вредной пищи чаще обращаются к психологам, чем приверженцы ЗОЖ. Результаты своего исследования они приводят на страницах журнала International Journal of Food Sciences and Nutrition. "
      ></ArticlesComponent>
    </Container>
  );
};

export default Articles;
