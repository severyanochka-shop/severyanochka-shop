import React from "react";
import { BannerPromo } from "../../components/BannerPromo/BannerPromo";
import { MainWrapperCard } from "../../components/MainWrapperCard/MainWrapperCard";
import { Banners } from "../Banners/Banners";

export const Main = () => {
  return (
    <>
      <BannerPromo />
      <MainWrapperCard title="Акции" />
      <MainWrapperCard title="Новинки" />
      <MainWrapperCard title="Покупали раньше" />
      {/* <Banners /> */}
    </>
  );
};
