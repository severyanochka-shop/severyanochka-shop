import { combineReducers, configureStore } from "@reduxjs/toolkit";
import categoriesReducer from "./reducers/CategoriesSlice";
import dataReducer from "./reducers/DataSlice";

const rootReducer = combineReducers({ categoriesReducer, dataReducer });

export const setupStore = () => {
  return configureStore({
    reducer: rootReducer,
  });
};
