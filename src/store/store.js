import { combineReducers, configureStore } from "@reduxjs/toolkit";
import categoriesReducer from "./reducers/CategoriesSlice";
import dataReducer from "./reducers/DataSlice";
import burgerReducer from "./reducers/BurgerSlice";

const rootReducer = combineReducers({ categoriesReducer, dataReducer, burgerReducer });

export const setupStore = () => {
  return configureStore({
    reducer: rootReducer,
  });
};
