import React from "react";
import { Container } from "../../layout/Container/Container.jsx";
import s from "./AboutCompany.module.scss";
import groupPeople from "./assets/groupPeople.svg";
import сhecksev from "./assets/checksev.svg";
import logosevabout from "./assets/logosevabout.svg";

export const AboutCompany = () => {
  return (
    <div className={s.about}>
      <Container>
        <div className={s.about__head}>
          <div className={s.about__titles}>
            <h3 className={s.about__subtitle}>
              Мы непрерывно развиваемся и <nbsp />
              <br className={s.about__subtitle_br} />
              работаем над совершенствованием сервиса, <nbsp />
              <br className={s.about__subtitle_br} />
              заботимся о наших клиентах, <nbsp />
              <br className={s.about__subtitle_br} />
              стремимся к лучшему будущему.
            </h3>
          </div>
          <img src={groupPeople} alt="groupPeople" className={s.about__img} />
        </div>
        <div className={s.about__checkboxes}>
          <div className={s.about__texts}>
            <img src={сhecksev} alt="сheck" className={s.about__check_img} />
            <p className={s.about__textOne}>Мы занимаемся розничной торговлей</p>
            <p className={s.about__textTwo}>Более 20 лет.</p>
          </div>
          <div className={`${s.about__texts} ${s.about__textssecond}`}>
            <img src={сhecksev} alt="сheck" className={s.about__check_img} />
            <p className={s.about__textOne}>Основная миссия компании</p>
            <p className={s.about__textTwo}>
              Максимальное качество товаров и услуг по доступной цене.
            </p>
          </div>
          <div className={`${s.about__texts} ${s.about__textsthree}`}>
            <img src={сhecksev} alt="сheck" className={s.about__check_img} />
            <p className={s.about__textOne}>Отличительная черта нашей сети</p>
            <p className={s.about__textTwo}>
              Здоровая и полезная продукция местного производства в наших магазинах.
            </p>
          </div>
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
