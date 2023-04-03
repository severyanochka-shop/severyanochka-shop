import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  productsMinPrice: null,
  productsMaxPrice: null,
  availability: null,
  subcategoryId: null,
};

export const filterCategorySlice = createSlice({
  name: "filterCategory",
  initialState,

  reducers: {
    setMinPrice: (state, action) => {
      state.productsMinPrice = action.payload;
    },
    setMaxPrice: (state, action) => {
      state.productsMaxPrice = action.payload;
    },
    setAvailability: (state, action) => {
      if (!action.payload) state.availability = !state.availability;
      else state.availability = action.payload;
    },
    setSubcategoryId: (state, action) => {
      state.subcategoryId = action.payload;
    },
    deleteFilterCategory: (state) => {
      state.productsMinPrice = null;
      state.productsMaxPrice = null;
      state.availability = null;
      state.subcategoryId = null;
    },
  },
});

export default filterCategorySlice.reducer;
