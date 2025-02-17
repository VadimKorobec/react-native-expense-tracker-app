import { StyleSheet, View } from "react-native";

import ExpensesSummary from "./ExpensesSummary";
import ExpensesList from "./ExpensesList";

import { GlobalStyles } from "../../constanst/styles";
import { Expense } from "../../types/expense";

interface ExpensesOutputProps {
  expenses: Expense[];
}

const ExpensesOutput = ({ expenses }: ExpensesOutputProps) => {
  return (
    <View style={styles.container}>
      <ExpensesSummary />
      <ExpensesList expenses={expenses} />
    </View>
  );
};

export default ExpensesOutput;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 24,
    backgroundColor: GlobalStyles.colors.primary700,
  },
});
