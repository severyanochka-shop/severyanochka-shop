import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  burgerHide: false,
};

export const burgerSlice = createSlice({
  name: "burger",
  initialState,

  reducers: {
    getBurger: (state, action) => {
      state.burgerHide = !state.burgerHide;
      if (action.payload === false) {
        state.burgerHide = false
      }
    },
  },
});

export default burgerSlice.reducer;
