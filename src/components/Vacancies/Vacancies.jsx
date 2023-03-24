import React from "react";
import { Vacancy } from "./Vacancy/Vacancy";
import s from "./Vacancies.module.scss";
import { useState } from "react";
import { Modal } from "../../layout/Modal/Modal";
import { ModalVacancy } from "../../layout/Modal/ModalVacancy/ModalVacancy";

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
      {isModal && (
        <>
          <Modal handleClose={handleClose} children={<ModalVacancy />} />
          <div className={s.shadow} onClick={handleClose}></div>
        </>
      )}
    </div>
  );
};
