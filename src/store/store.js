import { combineReducers, configureStore } from "@reduxjs/toolkit";
import categoriesReducer from "./reducers/CategoriesSlice";

const rootReducer = combineReducers({ categoriesReducer });

export const setupStore = () => {
  return configureStore({
    reducer: rootReducer,
  });
};
