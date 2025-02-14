import { StyleSheet, View } from "react-native";

import ExpensesSummary from "./ExpensesSummary";
import ExpensesList from "./ExpensesList";

import { GlobalStyles } from "../../constanst/styles";

const ExpensesOutput = () => {
  return (
    <View style={styles.container}>
      <ExpensesSummary />
      <ExpensesList />
    </View>
  );
};

export default ExpensesOutput;

const styles = StyleSheet.create({
  container: {
    flex:1,
    padding: 24,
    backgroundColor: GlobalStyles.colors.primary700
  }
});
