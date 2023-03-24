import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  burgerHide: false,
};

export const burgerSlice = createSlice({
  name: "burger",
  initialState,

  reducers: {
    getBurger: (state) => {
      state.burgerHide = !state.burgerHide;
    },
  },
});

export default burgerSlice.reducer;
