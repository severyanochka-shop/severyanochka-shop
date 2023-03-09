import React from "react";
import { Button } from "../ui/Button/Button";
import {Toggle} from "../ui/Toggle/Toggle";

export const Main = () => {
  return (
    <div className={"container"}>
      <h1>СЕВЕРЯНОЧКА</h1>

      {/* <Toggle size = {"toggle-switch__XL"}/> */}
      {/* <Toggle size = {"toggle-switch__L"}/> */}
            {/* <Toggle size={"XL"}/>
            <Toggle size={"L"}/>   */}
            <Toggle XL checked={false}/>
            <Toggle L checked={false}/>  
    </div>
  );
};
