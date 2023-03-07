import React from "react";

export const layout = ({ children }) => {
  return (
    <>
      <header></header>
      <main>{children}</main>
      <footer></footer>
    </>
  );
};
