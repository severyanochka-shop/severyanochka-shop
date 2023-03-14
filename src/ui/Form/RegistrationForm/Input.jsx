import React from "react";

export const Input = () => {
  return (
    <input type="tel" name="tel"  pattern="\+7\s?[\(]{0,1}9[0-9]{2}[\)]{0,1}\s?\d{3}[-]{0,1}\d{2}[-]{0,1}\d{2}" />
  );
};
