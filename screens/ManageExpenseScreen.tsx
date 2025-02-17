import { useLayoutEffect } from "react";
import { RouteProp, useNavigation, useRoute } from "@react-navigation/native";
import { StyleSheet, View } from "react-native";
import { RootStackParamList } from "../types/navigation";
import { NativeStackNavigationProp } from "@react-navigation/native-stack";

import IconButton from "../components/UI/IconButton";

import { GlobalStyles } from "../constanst/styles";

type ManageExpenseRouteProp = RouteProp<RootStackParamList, "ManageExpense">;
type ManageExpenseNavigationProp = NativeStackNavigationProp<
  RootStackParamList,
  "ManageExpense"
>;

const ManageExpenseScreen = () => {
  const route = useRoute<ManageExpenseRouteProp>();
  const navigation = useNavigation<ManageExpenseNavigationProp>();

  const expenseId = route.params?.expenseId;
  const isEditing = !!expenseId;

  useLayoutEffect(() => {
    navigation.setOptions({
      title: isEditing ? "Edit Expense" : "Add Expense",
    });
  }, [navigation, isEditing]);

  const handleDeleteExpense = () => {};

  return (
    <View>
      {isEditing && (
        <IconButton
          icon="trash"
          color={GlobalStyles.colors.error500}
          size={24}
          onPress={handleDeleteExpense}
        />
      )}
    </View>
  );
};

export default ManageExpenseScreen;

const styles = StyleSheet.create({});
