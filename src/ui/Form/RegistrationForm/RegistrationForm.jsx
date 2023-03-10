import React from "react";
import "./RigistrationForm.scss";
import { Button } from '../../Button'

export const RegistrationForm = () => {
  return (
    <div className="container">
      <h1 className="title">Регистрация</h1>
      <h2 className="subtitle">Обязательные поля</h2>
      <div className="obligatoryFieldsWrapper">
        <input type="text" className="input" />
        <input type="text" className="input" />
        <input type="text" className="input" />
        <input type="text" className="input" />
        <input type="text" className="input" />
        <input type="text" className="input" />
        <input type="text" className="input" />
      </div>
      <h2 className="subtitle">Необязательные поля</h2>
      <div className="freeFieldsWrapper">
        <input type="text" className="input" />
        <input type="text" className="input" />
        <input type="text" className="input" />
      </div>
        <Button/>
    </div>
  );
};
