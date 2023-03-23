import React from "react";
import s from "./AboutCompanyList.module.scss";
import сhecksev from "../../AboutCompany/assets/checksev.svg";

export const AboutCompanyList = ({ text1, text2 }) => {
  return (
    <>
      <div className={s.about__texts}>
        <img src={сhecksev} alt="сheck" className={s.about__check_img} />
        <p className={s.about__textOne}>{text1}</p>
        <p className={s.about__textTwo}>{text2}</p>
      </div>
    </>
  );
};
