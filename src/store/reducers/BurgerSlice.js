import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  burgerHide: false,
};

export const burgerReducer = createSlice({
  name: "burger",
  initialState,

  reducers: {
    getBurger: (state) => {
      state.burgerHide = !state.burgerHide;
    },
  },
});

// export const { getBurger } = burgerReducer.actions;
export default burgerReducer.reducer; 
