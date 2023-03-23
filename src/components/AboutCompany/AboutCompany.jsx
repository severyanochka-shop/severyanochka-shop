import React from "react";
import { Container } from "../../layout/Container/Container.jsx";
import s from "./AboutCompany.module.scss";
import groupPeople from "./assets/groupPeople.svg";
import logosevabout from "./assets/logosevabout.svg";
import { AboutCompanyList } from "./AboutCompanyList/AboutCompanyList.jsx";

export const AboutCompany = () => {
  return (
    <div className={s.about}>
      <Container>
        <div className={s.about__head}>
          <div className={s.about__titles}>
            <h3 className={s.about__subtitle}>
              Мы непрерывно развиваемся и работаем над совершенствованием сервиса, заботимся о наших
              клиентах, стремимся к лучшему будущему.
            </h3>
          </div>
          <img src={groupPeople} alt="groupPeople" className={s.about__img} />
        </div>
        <div className={s.about__checkboxes}>
          <AboutCompanyList text1="Мы занимаемся розничной торговлей" text2="Более 20 лет." />
          <AboutCompanyList
            text1="Основная миссия компании"
            text2="Максимальное качество товаров и услуг по доступной цене."
          />
          <AboutCompanyList
            text1="Отличительная черта нашей сети"
            text2="Здоровая и полезная продукция местного производства в наших магазинах."
          />
        </div>
        <div className={s.about__thanks}>
          <img src={logosevabout} alt="logo" className={s.about__thanks_img} />
          <div className={s.about__thanks_triangle}></div>
          <p className={s.about__thanks_text}>
            Спасибо за то, что вы с нами. Северяночка, везет всегда!
          </p>
        </div>
      </Container>
    </div>
  );
};
