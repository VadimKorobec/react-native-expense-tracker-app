import { StyleSheet } from "react-native";
import ExpensesOutput from "../components/ExpensesOutput/ExpensesOutput";
import { useSelector } from "react-redux";
import { RootState } from "../store/store";
import { getDateMinusDays, getFormattedDate } from "../util/date";

const RecentExpensesScreen = () => {
  const expenses = useSelector((state: RootState) => state.expenses.expenses);

  const resentExpenses = expenses.filter((item) => {
    const today = new Date();
    const date7DaysAgo = getDateMinusDays(today, 7);
    return item.date > getFormattedDate(date7DaysAgo);
  });

  return <ExpensesOutput expenses={resentExpenses} />;
};

export default RecentExpensesScreen;

const styles = StyleSheet.create({});
