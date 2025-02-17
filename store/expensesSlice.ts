import { createSlice } from "@reduxjs/toolkit";
import type { PayloadAction } from "@reduxjs/toolkit";
import { Expense } from "../types/expense";

interface ExpensesState {
  expenses: Expense[];
}

const initialState: ExpensesState = {
  expenses: [
    {
      id: "e1",
      description: "A pair of shoes",
      amount: 59.99,
      date: "2025-01-19",
    },
    {
      id: "e2",
      description: "A pair of trousers",
      amount: 89.29,
      date: "2025-01-21",
    },
    {
      id: "e3",
      description: "A pair of shirts",
      amount: 39.69,
      date: "2025-01-27",
    },
    {
      id: "e4",
      description: "A book",
      amount: 12.59,
      date: "2025-02-14",
    },
    {
      id: "e5",
      description: "A magazine",
      amount: 4.29,
      date: "2025-02-15",
    },
  ],
};

const expensesSlice = createSlice({
  name: "expenses",
  initialState,
  reducers: {
    deleteExpense: (state, action: PayloadAction<string>) => {
      const newExpenses = state.expenses.filter(
        (item) => item.id !== action.payload
      );
      state.expenses = newExpenses;
    },
    addExpense: (state, action: PayloadAction<Expense>) => {
      state.expenses = [...state.expenses, action.payload];
    },
    updateExpense: (state, action: PayloadAction<Expense>) => {
      const updateExpenses = state.expenses.map((item) =>
        item.id === action.payload.id
          ? {
              ...item,
              description: action.payload.description,
              amount: action.payload.amount,
              date: action.payload.date,
            }
          : item
      );
      state.expenses = updateExpenses;
    },
  },
});

export const { deleteExpense, addExpense, updateExpense } =
  expensesSlice.actions;

export const expensesReducer = expensesSlice.reducer;
