import { useLayoutEffect } from "react";
import { RouteProp, useNavigation, useRoute } from "@react-navigation/native";
import { StyleSheet, View } from "react-native";
import { RootStackParamList } from "../types/navigation";
import { NativeStackNavigationProp } from "@react-navigation/native-stack";

import IconButton from "../components/UI/IconButton";
import Button from "../components/UI/Button";

import { GlobalStyles } from "../constanst/styles";
import { useDispatch } from "react-redux";
import { AppDispatch } from "../store/store";
import {
  addExpense,
  deleteExpense,
  updateExpense,
} from "../store/expensesSlice";

type ManageExpenseRouteProp = RouteProp<RootStackParamList, "ManageExpense">;
type ManageExpenseNavigationProp = NativeStackNavigationProp<
  RootStackParamList,
  "ManageExpense"
>;

const ManageExpenseScreen = () => {
  const route = useRoute<ManageExpenseRouteProp>();
  const navigation = useNavigation<ManageExpenseNavigationProp>();
  const dispatch = useDispatch<AppDispatch>();

  const expenseId = route.params?.expenseId;
  const isEditing = !!expenseId;

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

  const handleConfirm = () => {
    if (isEditing) {
      dispatch(
        updateExpense({
          id: expenseId,
          description: "Test!!!",
          amount: 29.99,
          date: "2025-02-18",
        })
      );
    } else {
      dispatch(
        addExpense({
          id: "e6",
          description: "Test",
          amount: 19.99,
          date: "2025-02-17",
        })
      );
    }
    navigation.goBack();
  };
  
  return (
    <View style={styles.container}>
      <View style={styles.buttons}>
        <Button style={styles.button} mode="flat" onPress={handleCancel}>
          Cancel
        </Button>
        <Button style={styles.button} onPress={handleConfirm}>
          {isEditing ? "Update" : "Add"}
        </Button>
      </View>
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
  buttons: {
    flexDirection: "row",
    justifyContent: "center",
    alignItems: "center",
    gap: 8,
  },
  button: {
    minWidth: 120,
  },
  deleteContainer: {
    marginTop: 16,
    paddingTop: 8,
    borderTopWidth: 2,
    borderTopColor: GlobalStyles.colors.primary200,
    alignItems: "center",
  },
});
