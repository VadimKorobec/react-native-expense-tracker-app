import { StyleSheet } from "react-native";
import ExpensesOutput from "../components/ExpensesOutput/ExpensesOutput";
import { useDispatch, useSelector } from "react-redux";
import { AppDispatch, RootState } from "../store/store";
import { getDateMinusDays, getFormattedDate } from "../util/date";
import { useEffect } from "react";
import { fetchExpenses } from "../store/operations";

const RecentExpensesScreen = () => {
  const { expenses, isLoading, error } = useSelector(
    (state: RootState) => state.expenses
  );

  const dispatch = useDispatch<AppDispatch>();

  useEffect(() => {
    dispatch(fetchExpenses());
  }, [dispatch]);

  const newExpenses = Object.values(expenses)
    .map((expense) => ({
      id: expense.id,
      amount: expense.amount,
      date: expense.date,
      description: expense.description,
    }))
    .filter((expense) => {
      const today = new Date();
      const date7DaysAgo = getDateMinusDays(today, 7);
      return expense.date > getFormattedDate(date7DaysAgo);
    });

  return (
    <ExpensesOutput
      expenses={newExpenses}
      text="Last 7 days"
      fallbackText="No expenses registered for the last 7 days"
    />
  );
};

export default RecentExpensesScreen;

const styles = StyleSheet.create({});
