import { StyleSheet, Text, View } from "react-native";
import { useSelector } from "react-redux";
import { RootState } from "../../store/store";

import { GlobalStyles } from "../../constanst/styles";

const ExpensesSummary = () => {
  const expenses = useSelector((state: RootState) => state.expenses.expenses);

  const summarySum = expenses.reduce((acc, item) => acc + item.amount, 0);

  return (
    <View style={styles.container}>
      <Text style={styles.period}>Last 7 days</Text>
      <Text style={styles.sum}>{summarySum.toFixed(2)}</Text>
    </View>
  );
};

export default ExpensesSummary;

const styles = StyleSheet.create({
  container: {
    padding: 8,
    backgroundColor: GlobalStyles.colors.primary50,
    borderRadius: 6,
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
  },
  period: {
    fontSize: 12,
    color: GlobalStyles.colors.primary400,
  },
  sum: {
    fontSize: 16,
    fontWeight: "bold",
    color: GlobalStyles.colors.primary500,
  },
});
