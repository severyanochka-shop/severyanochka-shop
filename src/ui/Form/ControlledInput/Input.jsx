import React from "react";
import "../ControlledInput/Input.scss";

export const Input = (props) => {
  console.log(props.name);
  console.log(props.rule);
  console.log(props.register);

  return <input {...props.register?.(props.name, props.rule)} className="inputA" {...props} />;
};
