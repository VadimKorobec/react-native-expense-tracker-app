import { StyleSheet } from "react-native";

import ExpensesOutput from "../components/ExpensesOutput/ExpensesOutput";
import { useDispatch, useSelector } from "react-redux";
import { AppDispatch, RootState } from "../store/store";
import { useEffect } from "react";
import { fetchExpenses } from "../store/operations";

const AllExpensesScreen = () => {
  const { expenses, isLoading, error } = useSelector(
    (state: RootState) => state.expenses
  );

  const dispatch = useDispatch<AppDispatch>();

  useEffect(() => {
    dispatch(fetchExpenses());
  }, [dispatch]);

  return (
    <ExpensesOutput
      expenses={expenses}
      text="Total"
      fallbackText="No registered expenses found!"
    />
  );
};

export default AllExpensesScreen;

const styles = StyleSheet.create({});
