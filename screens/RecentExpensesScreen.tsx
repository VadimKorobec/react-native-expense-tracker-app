import { StyleSheet } from "react-native";
import ExpensesOutput from "../components/ExpensesOutput/ExpensesOutput";
import { useDispatch, useSelector } from "react-redux";
import { AppDispatch, RootState } from "../store/store";
import { getDateMinusDays, getFormattedDate } from "../util/date";
import { useEffect } from "react";
import { addExpense, fetchExpenses } from "../store/operations";

const RecentExpensesScreen = () => {
  const expenses = useSelector((state: RootState) => state.expenses.expenses);
  
  const dispatch = useDispatch<AppDispatch>()

  const resentExpenses = expenses.filter((item) => {
    const today = new Date();
    const date7DaysAgo = getDateMinusDays(today, 7);
    return item.date > getFormattedDate(date7DaysAgo);
  });

  useEffect(() => {
    dispatch(fetchExpenses())
  },[])

  return (
    <ExpensesOutput
      expenses={resentExpenses}
      text="Last 7 days"
      fallbackText="No expenses registered for the last 7 days"
    />
  );
};

export default RecentExpensesScreen;

const styles = StyleSheet.create({});
