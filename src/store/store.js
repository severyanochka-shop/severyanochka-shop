import { combineReducers, configureStore } from "@reduxjs/toolkit";

const rootReducer = combineReducers({});

export const setupStore = () => {
  return configureStore({
    reducer: rootReducer,
  });
};
