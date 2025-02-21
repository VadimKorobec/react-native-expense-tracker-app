import { useState } from "react";
import { Alert, StyleSheet, Text, View } from "react-native";
import { nanoid } from "@reduxjs/toolkit";

import Input from "./Input";
import Button from "../UI/Button";
import { Expense } from "../../types/expense";

interface ExpenseFormProps {
  submitButtonLabel: string;
  defaultValues: Expense;
  onSubmit: (data: Expense) => void;
  onCancel: () => void;
}

const ExpenseForm = ({
  onCancel,
  submitButtonLabel,
  onSubmit,
  defaultValues,
}: ExpenseFormProps) => {
  const [inputValues, setInputValues] = useState({
    description: defaultValues ? defaultValues.description : "",
    amount: defaultValues ? defaultValues.amount.toString() : "",
    date: defaultValues ? defaultValues.date : "",
  });

  const handleInputChange =
    (inputName: "description" | "amount" | "date") =>
    (enteredValue: string) => {
      setInputValues((prevValues) => ({
        ...prevValues,
        [inputName]: enteredValue,
      }));
    };

  const handleSubmit = () => {
    const amount = Number(inputValues.amount);

    if (isNaN(amount) || amount <= 0) {
      Alert.alert("Please enter a valid amount.");
      return;
    }
    if (!inputValues.description.trim() || !inputValues.date) {
      Alert.alert("Missing Information", "Please fill in all fields.");
      return;
    }

    onSubmit({
     
      amount,
      description: inputValues.description,
      date: inputValues.date,
    });
    onCancel();
  };

  return (
    <View style={styles.form}>
      <Text style={styles.title}>Your Expense</Text>
      <View style={styles.inputsRow}>
        <Input
          style={styles.rowInput}
          label="Amount"
          type="decimal-pad"
          onChangeText={handleInputChange("amount")}
          value={inputValues.amount}
        />
        <Input
          style={styles.rowInput}
          label="Date"
          placeholder="YYYY-MM-DD"
          maxLength={10}
          onChangeText={handleInputChange("date")}
          value={inputValues.date}
        />
      </View>
      <Input
        label="Description"
        multiline={true}
        autocorrect={false}
        autoCapitalize="sentences"
        value={inputValues.description}
        onChangeText={handleInputChange("description")}
      />
      <View style={styles.buttons}>
        <Button style={styles.button} mode="flat" onPress={onCancel}>
          Cancel
        </Button>
        <Button style={styles.button} onPress={handleSubmit}>
          {submitButtonLabel}
        </Button>
      </View>
    </View>
  );
};

export default ExpenseForm;

const styles = StyleSheet.create({
  form: {
    marginTop: 40,
  },
  title: {
    fontSize: 24,
    fontWeight: "bold",
    textAlign: "center",
    color: "white",
    marginBottom: 12,
  },
  inputsRow: {
    flexDirection: "row",
    justifyContent: "space-between",
  },
  rowInput: {
    flex: 1,
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
});
