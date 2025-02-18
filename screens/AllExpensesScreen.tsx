import { StyleSheet } from "react-native";

import ExpensesOutput from "../components/ExpensesOutput/ExpensesOutput";
import { useSelector } from "react-redux";
import { RootState } from "../store/store";

const AllExpensesScreen = () => {
  const expenses = useSelector((state: RootState) => state.expenses.expenses);
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
