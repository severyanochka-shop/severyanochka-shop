import React from "react";
import { CardCatalog } from "../../components/CardCatalog/CardCatalog";
import { Articles } from "../../components/Articles/Articles";

import { Layout } from "../../layout/Layout";

export const Main = () => {
  return (
    <>
      <CardCatalog />
      <Articles />
    </>
    // <>
    //   <h1 style={{ textAlign: "center" }}>СЕВЕРЯНОЧКА</h1>
    // </>
  );
};
