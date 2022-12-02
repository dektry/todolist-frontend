import { combineReducers, configureStore } from "@reduxjs/toolkit";

import { toDoListApi } from "../api/toDoListApi";

const rootReducer = combineReducers({
  [toDoListApi.reducerPath]: toDoListApi.reducer,
});

export const setupStore = () => {
  return configureStore({
    reducer: rootReducer,
    middleware: (getDefaultMiddleware) =>
      getDefaultMiddleware().concat(toDoListApi.middleware),
  });
};
