import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  countFilter: 0,
  minPrice: 0,
  maxPrice: Number.MAX_SAFE_INTEGER,
  availability: false,
  subcategory: false,
};

export const filterCategorySlice = createSlice({
  name: "filterCategory",
  initialState,

  reducers: {
    setInitialState: (state, action) => {
      state.countFilter = 0;
      state.maxPrice = action.payload.max;
      state.minPrice = action.payload.min;
      state.availability = action.payload.availability;
      state.subcategory = action.payload.subcategory;
    },
    setMinPrice: (state, action) => {
      state.minPrice = action.payload;
    },
    setMaxPrice: (state, action) => {
      state.maxPrice = action.payload;
    },
    setCountFilter: (state, action) => {
      state.countFilter = action.payload;
    },
    setAvailability: (state, action) => {
      if (!action.payload) state.availability = !state.availability;
      else state.availability = action.payload;
    },
    setSubcategory: (state, action) => {
      state.subcategory = action.payload;
    },
  },
});

export default filterCategorySlice.reducer;
