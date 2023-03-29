import { combineReducers, configureStore } from "@reduxjs/toolkit";
import burgerReducer from "./reducers/BurgerSlice";
import filterCategoryReducer from "./reducers/FilterCategorySlice";

const rootReducer = combineReducers({
  burgerReducer,
  filterCategoryReducer,
});

export const setupStore = () => {
  return configureStore({
    reducer: rootReducer,
  });
};
