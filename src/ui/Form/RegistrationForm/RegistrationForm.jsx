import React from "react";
import "./RigistrationForm.scss";
import "../../Button/Button";
import "../../Checkbox/Checkbox";
import { Checkbox } from "../../Checkbox/Checkbox";
import { Button } from "../../Button/Button";
import x from "../RegistrationForm/images/x.svg";
// import { Select } from "../../Select/Select";
import { Toggle } from "../../Toggle/Toggle";
import { Select } from "../../Select/Select";
// import { Select } from '../../Select/Select';

export const RegistrationForm = () => {
  return (
    <div className="wrapper">
      <img className={"closeForm"} src={x} alt="x" onClick={() => {}} />
      <h1 className="title">Регистрация</h1>
      <h2 className="subtitle">Обязательные поля</h2>
      <div className="obligatoryFieldsWrapper">
        <input type="text" className="input" />
        <input type="text" className="input" />
        <input type="text" className="input" />
        <input type="text" className="input" />
        <input type="text" className="input" />
        {/* <Select label="регион"></Select> */}
      </div>
      <h2 className="subtitle">Необязательные поля</h2>
      <div className="freeFieldsWrapper">
        <input type="text" className="input" />
        <input type="text" className="input" />
      </div>
      <div className="checkBoxWrapper">
        <div>
          <Checkbox extrasmall className={"checkBox"} />
        </div>
        <p className={"checkbox__text"}>У меня нет карты лояльности</p>
      </div>
      <Button large background="orange" className={"btnContinue"}>
        Продолжить
      </Button>
      <Button small background="orange" border="green" className={""}>
        Вход
      </Button>

      <Select className="select"
        label={"Регион"}
        options={[
          {
            value: "chocolate",
            label: "Chocolate",
          },
          {
            value: "strawberry",
            label: "Strawberry",
          },
          {
            value: "vanilla",
            label: "Vanilla",
          },
        ]}
      ></Select>
      <Toggle XL />
    </div>
  );
};
