import axios from "axios";
import { createAsyncThunk } from "@reduxjs/toolkit";
import { Expense } from "../types/expense";

axios.defaults.baseURL =
  "https://react-native-expence-tra-813d7-default-rtdb.firebaseio.com/";

export const fetchExpenses = createAsyncThunk(
  "expenses/fetchAll",
  async (_, thunkAPI) => {
    try {
      const response = await axios.get("/expenses.json");
      
      const expensesArray:Expense[] = [];

      for (const key in response.data) {
        const expenseObj = {
          id: key,
          amount: response.data[key].amount,
          date: response.data[key].date,
          description:response.data[key].description
        }
        expensesArray.push(expenseObj)
      }

       return expensesArray;
    } catch (error) {
      const errorMessage =
        error instanceof Error ? error.message : "Unknown error";
      return thunkAPI.rejectWithValue(errorMessage);
    }
  }
);

export const addExpense = createAsyncThunk<Expense, Expense>(
  "expenses/addExpense",
  async (expense, thunkAPI) => {
    try {
      const response = await axios.post("/expenses.json", expense);
      return response.data;
    } catch (error) {
      const errorMessage =
        error instanceof Error ? error.message : "Unknown error";
      return thunkAPI.rejectWithValue(errorMessage);
    }
  }
);
