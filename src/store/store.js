import { combineReducers, configureStore } from "@reduxjs/toolkit";
import categoriesReducer from "./reducers/CategoriesSlice";
import dataReducer from "./reducers/DataSlice";
import burgerReducer from "./reducers/BurgerSlice";
import filterCategoryReducer from "./reducers/FilterCategorySlice";

const rootReducer = combineReducers({
  categoriesReducer,
  dataReducer,
  burgerReducer,
  filterCategoryReducer,
});

export const setupStore = () => {
  return configureStore({
    reducer: rootReducer,
  });
};
