import { Pressable, StyleSheet, Text, View } from "react-native";

import { Expense } from "../../types/expense";
import { GlobalStyles } from "../../constanst/styles";
import { useNavigation } from "@react-navigation/native";
import { NativeStackNavigationProp } from "@react-navigation/native-stack";
import { RootStackParamList } from "../../types/navigation";

type NavigationProp = NativeStackNavigationProp<
  RootStackParamList,
  "ManageExpense"
>;

interface ExpenseItemProps {
  item: Expense;
}

const ExpenseItem = ({ item }: ExpenseItemProps) => {
  const navigation = useNavigation<NavigationProp>();

  const handlePressExpense = () => {
    navigation.navigate("ManageExpense", { expenseId: item.id });
  };

  

  return (
    <Pressable
      onPress={handlePressExpense}
      style={({ pressed }) => pressed && styles.pressed}
    >
      <View style={styles.itemContainer}>
        <View>
          <Text style={[styles.textBase, styles.description]}>
            {item.description}
          </Text>
          <Text style={styles.textBase}>{item.date}</Text>
        </View>
        <View style={styles.amountContainer}>
          <Text style={styles.amount}>{item.amount}</Text>
        </View>
      </View>
    </Pressable>
  );
};

export default ExpenseItem;

const styles = StyleSheet.create({
  pressed: {
    opacity: 0.75,
  },
  itemContainer: {
    padding: 12,
    marginVertical: 8,
    backgroundColor: GlobalStyles.colors.primary500,
    flexDirection: "row",
    justifyContent: "space-between",
    borderRadius: 6,
    elevation: 3,
  },
  textBase: {
    color: GlobalStyles.colors.primary50,
  },
  description: {
    fontSize: 16,
    marginBottom: 4,
    fontWeight: "bold",
  },
  amountContainer: {
    paddingVertical: 4,
    paddingHorizontal: 12,
    backgroundColor: "white",
    justifyContent: "center",
    alignItems: "center",
    borderRadius: 4,
    width: 80,
  },
  amount: {
    color: GlobalStyles.colors.primary500,
    fontWeight: "bold",
  },
});
