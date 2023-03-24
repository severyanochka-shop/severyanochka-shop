import React from "react";
import { Vacancy } from "./Vacancy/Vacancy";
import s from "./Vacancies.module.scss";
import { useState } from "react";
import { Modal } from "../../components/Modal/Modal";

export const Vacancies = () => {
  const [isModal, setIsModal] = useState(false);
  const handleClose = () => {
    setIsModal(!isModal);
  };
  return (
    <div className={s.vacancy}>
      <Vacancy handleClose={handleClose} />
      <Vacancy handleClose={handleClose} />
      <Vacancy handleClose={handleClose} />
      <Vacancy handleClose={handleClose} />
      <Vacancy handleClose={handleClose} />
      <Vacancy handleClose={handleClose} />
      {isModal && <Modal handleClose={handleClose} />}
      {isModal && <div className={s.shadow} onClick={handleClose}></div>}
    </div>
  );
};
