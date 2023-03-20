import React from "react";
import s from "./ContactItem.module.scss";

export const ContactItem = (props) => {
  const { adress, phone, img } = props;
  return (
    <div className={s.item3__el}>
      <img className={s.item3__top} src={img} alt="Восход" />{" "}
      <div>
        <img
          className={s.item3__pic}
          src={require("./Image/home.png")}
          alt="home"
        />
        <p>{adress}</p>
      </div>
      <div>
        <img
          className={s.item3__pic}
          src={require("./Image/tube.png")}
          alt="tube"
        />
        <a className={s.item3__tel} href="tel:89042713590">
          {phone}
        </a>
      </div>
    </div>
  );
};
