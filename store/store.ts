import { configureStore } from "@reduxjs/toolkit";
import { expensesReducer } from "./expensesSlice";
import { pressedReducer } from "./pressedSlice";

export const store = configureStore({
  reducer: {
    expenses: expensesReducer,
    pressed: pressedReducer,
  },
});

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
