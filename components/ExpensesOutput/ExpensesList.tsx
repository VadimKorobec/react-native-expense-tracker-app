import { FlatList, StyleSheet, Text } from "react-native";
import { useSelector } from "react-redux";
import { RootState } from "../../store/store";
import ExpenseItem from "./ExpenseItem";

const ExpensesList = () => {
  const expenses = useSelector((state: RootState) => state.expenses.expenses);

  return (
    <FlatList
      data={expenses}
      renderItem={({ item }) => <ExpenseItem item={item} />}
      keyExtractor={(item) => item.id}
    />
  );
};

export default ExpensesList;

const styles = StyleSheet.create({});
