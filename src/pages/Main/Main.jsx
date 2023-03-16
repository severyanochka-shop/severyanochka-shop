import React from "react";
import { FilterCategory } from "../../components/FilterCategory/FilterCategory";
import { Layout } from "../../layout/Layout";


export const Main = () => {
  return (
    <Layout>
      <h1 style={{ textAlign: "center" }}>СЕВЕРЯНОЧКА</h1>
      <FilterCategory/>
      </Layout>
  );
};
