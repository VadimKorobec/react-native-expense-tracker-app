import { useLayoutEffect } from "react";
import { RouteProp, useNavigation, useRoute } from "@react-navigation/native";
import { StyleSheet, View } from "react-native";
import { RootStackParamList } from "../types/navigation";
import { NativeStackNavigationProp } from "@react-navigation/native-stack";

import IconButton from "../components/UI/IconButton";

import { GlobalStyles } from "../constanst/styles";
import { useDispatch, useSelector } from "react-redux";
import { AppDispatch, RootState } from "../store/store";
import { deleteExpense, updateExpense } from "../store/expensesSlice";
import ExpenseForm from "../components/ManageExpense/ExpenseForm";
import { Expense } from "../types/expense";
import { addExpense } from "../store/operations";

type ManageExpenseRouteProp = RouteProp<RootStackParamList, "ManageExpense">;
type ManageExpenseNavigationProp = NativeStackNavigationProp<
  RootStackParamList,
  "ManageExpense"
>;

const ManageExpenseScreen = () => {
  const route = useRoute<ManageExpenseRouteProp>();
  const navigation = useNavigation<ManageExpenseNavigationProp>();
  const expenses = useSelector((state: RootState) => state.expenses.expenses);
  const dispatch = useDispatch<AppDispatch>();

  const expenseId = route.params?.expenseId;
  const isEditing = !!expenseId;

  const selectedExpenses = expenses.find((item) => item.id === expenseId)!;

  useLayoutEffect(() => {
    navigation.setOptions({
      title: isEditing ? "Edit Expense" : "Add Expense",
    });
  }, [navigation, isEditing]);

  const handleDeleteExpense = () => {
    if (expenseId) {
      dispatch(deleteExpense(expenseId));
    }

    navigation.goBack();
  };

  const handleCancel = () => {
    navigation.goBack();
  };

  const handleConfirm = (expenseData: Expense) => {
    if (isEditing) {
      dispatch(
        updateExpense({
          id: expenseId,
          description: expenseData.description,
          amount: expenseData.amount,
          date: expenseData.date,
        })
      );
    } else {
      dispatch(addExpense(expenseData));
    }
    navigation.goBack();
  };

  return (
    <View style={styles.container}>
      <ExpenseForm
        submitButtonLabel={isEditing ? "Update" : "Add"}
        onCancel={handleCancel}
        onSubmit={handleConfirm}
        defaultValues={selectedExpenses}
      />
      {isEditing && (
        <View style={styles.deleteContainer}>
          <IconButton
            icon="trash"
            color={GlobalStyles.colors.error500}
            size={36}
            onPress={handleDeleteExpense}
          />
        </View>
      )}
    </View>
  );
};

export default ManageExpenseScreen;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 24,
    backgroundColor: GlobalStyles.colors.primary800,
  },

  deleteContainer: {
    marginTop: 16,
    paddingTop: 8,
    borderTopWidth: 2,
    borderTopColor: GlobalStyles.colors.primary200,
    alignItems: "center",
  },
});
