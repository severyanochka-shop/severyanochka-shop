import React from "react";
import { RegistrationForm } from "../ui/Form/RegistrationForm/RegistrationForm";
import { RegistrationFormSubmit } from "../ui/Form/RegistrationFormSubmit/RegistrationFormSubmit";

export const Main = () => {
  return (
    <>
     <div className={"container"}>
      <h1>СЕВЕРЯНОЧКА</h1>
        <RegistrationForm/>
        {/* <RegistrationFormSubmit/> */}
    </div>
    </>
  );
};
