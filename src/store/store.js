import { combineReducers, configureStore } from "@reduxjs/toolkit";
import burgerReducer from "./reducers/BurgerSlice";
import filterCategoryReducer from "./reducers/FilterCategorySlice";
import paginationReducer from "./reducers/PaginationSlice";

const rootReducer = combineReducers({
  burgerReducer,
  filterCategoryReducer,
  paginationReducer,
});

export const setupStore = () => {
  return configureStore({
    reducer: rootReducer,
  });
};
