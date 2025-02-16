import { configureStore } from "@reduxjs/toolkit";
import { expensesReducer } from "./expensesSlice";
import { buttonReducer } from "./buttonSlice";

export const store = configureStore({
  reducer: {
    expenses: expensesReducer,
    button: buttonReducer,
  },
});

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
