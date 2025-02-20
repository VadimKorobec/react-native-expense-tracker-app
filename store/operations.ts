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
      return response.data;
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
