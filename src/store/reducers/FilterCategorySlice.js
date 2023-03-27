import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  countFilter: 0,
  minPrice: 0,
  maxPrice: Number.MAX_SAFE_INTEGER,
  availability: false,
};

export const filterCategorySlice = createSlice({
  name: "filterCategory",
  initialState,

  reducers: {
    setPrice: (state, action) => {
      state.maxPrice = action.payload.max;
      state.minPrice = action.payload.min;
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
    setAvailability: (state) => {
      state.availability = !state.availability;
    },
  },
});

export default filterCategorySlice.reducer;
