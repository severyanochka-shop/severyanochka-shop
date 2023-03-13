import React from "react";
import { Header } from "../layout/Header/Header";
import { DropdownMenu } from "../layout/Header/DropdownMenu/DropdownMenu";

export const Main = () => {
  return (
    <div className={"container"}>
      <h1>СЕВЕРЯНОЧКА</h1>
      <Header />
      <DropdownMenu />
    </div>
  );
};
