import { OurShops } from "../OurShops/OurShops";
import s from "./Contacts.module.scss";

export const Contacts = () => {
  return (
    <div className={s.contacts}>
      <div className={s.item1}>
        <div className={s.box}>
          <img className={s.box__img} src={require("./assets/home.png")} alt="home" />
          <span className={(s.box__text, s.first)}>Бухгалтерия, склад</span>
          <a className={s.box__tel} href="tel:88214092619">
            +7 8214092619
          </a>
        </div>
        <div className={s.box}>
          <img className={s.box__img} src={require("./assets/percent.png")} alt="%" />
          <span className={s.box__text}>Вопросы по системе лояльности</span>
          <a className={s.box__tel} href="tel:89087163397">
            +7 908 716 33 97
          </a>
        </div>
      </div>
      <OurShops />
    </div>
  );
};
