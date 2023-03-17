import React from "react";
import { Container } from "../../layout/Container/Container.jsx";
import s from "./AboutCompany.module.scss";
import group7105 from "./images/group7105.svg";
import groupPeople from "./images/groupPeople.svg";
import сhecksev from "./images/checksev.svg";
import logosevabout from "./images/logosevabout.svg";
import rectangle from "./images/rectangle.svg";

export const AboutCompany = () => {
  return (
    <div className={s.about}>
      <Container>
        <div className={s.abouttitle}>
          {/* <img src={group7105} alt="groupPeople" className={s.abouttitle_img} /> */}

          <div className={s.titles}>
            <h1 className={s.title}>О компании</h1>
            <h3 className={s.subtitle}>
              Мы непрерывно развиваемся и
              <br />
              работаем над совершенствованием сервиса,
              <br className={s.subtitle__br} />
              заботимся о наших клиентах,
              <br />
              стремимся к лучшему будущему.
            </h3>
          </div>
          <img src={groupPeople} alt="groupPeople" className={s.about__img} />
        </div>
        <div className={s.checkboxes}>
          <div className={s.texts}>
            <img src={сhecksev} alt="сheck" className={s.check__img} />
            <p className={s.textOne}>Мы занимаемся розничной торговлей</p>
            <p className={s.textTwo}>Более 20 лет.</p>
          </div>
          <div className={`${s.texts} ${s.textssecond}`}>
            <img src={сhecksev} alt="сheck" className={s.check__img} />
            <p className={s.textOne}>Основная миссия компании</p>
            <p className={s.textTwo}>Максимальное качество товаров и услуг по доступной цене.</p>
          </div>
          <div className={`${s.texts} ${s.textsthree}`}>
            <img src={сhecksev} alt="сheck" className={s.check__img} />
            <p className={s.textOne}>Отличительная черта нашей сети</p>
            <p className={s.textTwo}>
              Здоровая и полезная продукция местного производства в наших магазинах.
            </p>
          </div>
        </div>
        <div className={s.thanks}>
          <img src={logosevabout} alt="logo" className={s.thanks__img} />
          {/* <div className={s.thanks__triangle}>tri</div> */}
          <img src={rectangle} alt="rectangle" className={s.thanks__triangle} />

          <p className={s.thanks__text}>Спасибо за то, что вы с нами. Северяночка, везет всегда!</p>
        </div>
      </Container>
    </div>
  );
};
