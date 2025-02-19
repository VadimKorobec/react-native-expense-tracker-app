import { StyleSheet, Text, TextInput, View, ViewStyle } from "react-native";
import { GlobalStyles } from "../../constanst/styles";

interface InputProps {
  label: string;
  type?:
    | "number-pad"
    | "decimal-pad"
    | "numeric"
    | "email-address"
    | "phone-pad"
    | "url";
  autoCapitalize?: "characters" | "words" | "sentences" | "none";
  maxLength?: number;
  placeholder?: string;
  multiline?: boolean;
  autocorrect?: boolean;
  value: string;
  style?: ViewStyle;
  onChangeText?: (enteredValue: string) => void;
}

const Input = ({
  label,
  type,
  maxLength,
  placeholder,
  multiline,
  autocorrect,
  autoCapitalize,
  style,
  value,
  onChangeText,
}: InputProps) => {
  return (
    <View style={[styles.inputContainer, style]}>
      <Text style={styles.label}>{label}</Text>
      <TextInput
        style={[styles.input, multiline && styles.inputMultiline]}
        keyboardType={type}
        maxLength={maxLength}
        placeholder={placeholder}
        multiline={multiline}
        autoCorrect={autocorrect}
        autoCapitalize={autoCapitalize}
        value={value}
        onChangeText={onChangeText}
      />
    </View>
  );
};

export default Input;

const styles = StyleSheet.create({
  inputContainer: {
    marginHorizontal: 4,
    marginVertical: 8,
  },
  label: {
    fontSize: 12,
    color: GlobalStyles.colors.primary100,
    marginBottom: 4,
  },
  input: {
    backgroundColor: GlobalStyles.colors.primary100,
    padding: 6,
    borderRadius: 6,
    fontSize: 16,
    color: GlobalStyles.colors.primary700,
  },
  inputMultiline: {
    minHeight: 100,
    textAlignVertical: "top",
  },
});
