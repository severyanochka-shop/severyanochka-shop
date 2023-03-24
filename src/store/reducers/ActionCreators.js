import axios from "axios";
import { createAsyncThunk } from "@reduxjs/toolkit";
import { categories } from "./categories";
import { data } from "./data";

export const categoriesFetch = createAsyncThunk("api/categories", async () => {
  return categories;
  // return (await axios("https://codeine.tech/json/categories.json")).data;
});

export const dataFetch = createAsyncThunk("api/data", async () => {
  return data;
  // return (await axios("https://codeine.tech/json/categories.json")).data;
});
