import React from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import { Catalog } from "../pages/Catalog";
import { Main } from "../pages/Main";
import "./global/styles/global.scss";
import './global/styles/variables.scss'

export const App = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Main />}></Route>
        <Route path="/2" element={<Catalog />}></Route>
      </Routes>
    </BrowserRouter>
  );
};
