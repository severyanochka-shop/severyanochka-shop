import axios from "axios";
import { createAsyncThunk } from "@reduxjs/toolkit";
import { data } from "./data";

export const categoriesFetch = createAsyncThunk("api/categories", async () => {
  return data;
  // return (await axios("https://codeine.tech/json/categories.json")).data;
});
