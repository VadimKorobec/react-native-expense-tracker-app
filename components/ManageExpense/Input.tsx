import { StyleSheet, Text, TextInput, View } from "react-native";

interface InputProps {
  label: string;
  type?:
    | "number-pad"
    | "decimal-pad"
    | "numeric"
    | "email-address"
    | "phone-pad"
    | "url";
  maxLength?: number;
  placeholder?: string;
  onChangeText: () => void;
}

const Input = ({ label, type, maxLength, placeholder }: InputProps) => {
  return (
    <View>
      <Text>{label}</Text>
      <TextInput
        keyboardType={type}
        maxLength={maxLength}
        placeholder={placeholder}
      />
    </View>
  );
};

export default Input;

const styles = StyleSheet.create({});
