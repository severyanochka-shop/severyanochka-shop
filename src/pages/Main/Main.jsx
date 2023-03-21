import React from "react";
import { RegistrationForm } from "../../ui/Form/RegistrationForm/RegistrationForm";
import { AuthorizationForm } from "../../ui/Form/AuthorizationForm/AuthorizationForm";

export const Main = () => {
  return (
    <>
      <h1 style={{ textAlign: "center" }}>СЕВЕРЯНОЧКА</h1>
      {/* <AuthorizationForm /> */}
      {/* <RegistrationFormSubmit /> */}
      <RegistrationForm />
    </>
  );
};
