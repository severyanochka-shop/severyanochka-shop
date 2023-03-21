import React from "react";
import { Article } from "../../components/Article/Article";
import image1 from "../../components/Article/assets/image1.jpg";
import image2 from "../../components/Article/assets/image2.jpg";
import image3 from "../../components/Article/assets/image3.jpg";

export const Main = () => {
  return (
    <>
      <Article
        image={image1}
        // import image from "./path/to/image”
        // image="./assets/image1.jpg"
        date="05.03.2021"
        title="Режим использования масок и перчаток на территории магазинов"
        text='Подробная информация о режимах использования масок и перчаток на территории магазинов "ЛЕНТА". Информация обновляется каждый будний день.'
      />
      <h1 style={{ textAlign: "center" }}>СЕВЕРЯНОЧКА</h1>
    </>
  );
};
