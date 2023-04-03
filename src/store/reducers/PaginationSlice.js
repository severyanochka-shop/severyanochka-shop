import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  page: 0,
  limit: 12,
};

export const paginationSlice = createSlice({
  name: "pagination",
  initialState,

  reducers: {
    setOffset: (state, action) => {
      if (action.payload) state.limit = action.payload;
      else state.limit = state.limit + 6;
    },
    setPage: (state, action) => {
      state.page = action.payload;
    },
  },
});

export default paginationSlice.reducer;
