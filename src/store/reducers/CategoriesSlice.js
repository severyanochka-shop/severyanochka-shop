import { createSlice } from "@reduxjs/toolkit";
import { categoriesFetch } from "./ActionCreators";

const initialState = {
  categories: [],
};

export const categoriesSlice = createSlice({
  name: "categories",
  initialState,
  reducers: {},
  extraReducers: {
    [categoriesFetch.fulfilled.type]: (state, action) => {
      state.categories = action.payload;
    },
  },
});

export default categoriesSlice.reducer;
