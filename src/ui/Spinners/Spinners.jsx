import React from "react";
import s from "./Spinners.module.scss";

export const Spinners = ({ type }) => {
  const right = (
    <div className={s.spinnerwrapper}>
      <div className={s.spinnerarea}>
        <div className={s.loaderright}>
          <div className={s.stick1}></div>
          <div className={s.stick2}></div>
          <div className={s.stick3}></div>
          <div className={s.stick4}></div>
          <div className={s.stick5}></div>
          <div className={s.stick6}></div>
          <div className={s.stick7}></div>
          <div className={s.stick8}></div>
          <div className={s.stick9}></div>
          <div className={s.stick10}></div>
          <div className={s.stick11}></div>
          <div className={s.stick12}></div>
        </div>
      </div>
    </div>
  );

  const fill = (
    <div className={s.spinnerwrapper}>
      <div className={s.spinnerarea}>
        <div className={s.spinnerfill}></div>
      </div>
    </div>
  );

  const border = (
    <div className={s.spinnerwrapper}>
      <div className={s.spinnerarea}>
        <svg className={s.spinnerborder} viewBox="0 0 50 50">
          <circle className={s.path} cx="25" cy="25" r="20" fill="none" strokeWidth="5"></circle>
        </svg>
      </div>
    </div>
  );

  const circle = (
    <div className={s.spinnerwrapper}>
      <div className={s.spinnerarea}>
        <div className={s.loadercircle}>
          <div className={s.circle1}></div>
          <div className={s.circle2}></div>
          <div className={s.circle3}></div>
          <div className={s.circle4}></div>
          <div className={s.circle5}></div>
          <div className={s.circle6}></div>
          <div className={s.circle7}></div>
          <div className={s.circle8}></div>
        </div>
      </div>
    </div>
  );

  if (type === "right") return right;
  if (type === "fill") return fill;
  if (type === "border") return border;
  if (type === "circle") return circle;
};
