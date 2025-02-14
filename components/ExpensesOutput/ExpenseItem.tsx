import { Pressable, StyleSheet, Text, View } from "react-native";
import { Expense } from "../../types/expense";

interface ExpenseItemProps {
  item: Expense;
}

const ExpenseItem = ({ item }: ExpenseItemProps) => {
  return (
    <Pressable>
      <View>
        <View>
          <Text>{item.description}</Text>
          <Text>{item.date}</Text>
        </View>
        <Text>{item.amount}</Text>
      </View>
    </Pressable>
  );
};

export default ExpenseItem;

const styles = StyleSheet.create({});
