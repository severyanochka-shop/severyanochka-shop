import { createSlice } from "@reduxjs/toolkit";
import { dataFetch } from "./ActionCreators";

const initialState = {
  data: [],
};

export const dataSlice = createSlice({
  name: "data",
  initialState,
  reducers: {},
  extraReducers: {
    [dataFetch.fulfilled.type]: (state, action) => {
      state.data = action.payload;
    },
  },
});

export default dataSlice.reducer;
