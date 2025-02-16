import { useDispatch, useSelector } from "react-redux";

import { Pressable, StyleSheet, View } from "react-native";
import { Ionicons } from "@expo/vector-icons";
import { AppDispatch, RootState } from "../../store/store";
import { pressButton } from "../../store/buttonSlice";

interface IconButtonProps {
  icon: keyof typeof Ionicons.glyphMap;
  size: number;
  color: string | undefined;
}

const IconButton = ({ icon, size, color }: IconButtonProps) => {
    const isPressed = useSelector((state:RootState) => state.button.isPressed )
  const dispatch = useDispatch<AppDispatch>();
  return (
    <Pressable
      onPress={() => dispatch(pressButton(!isPressed))}
      style={({ pressed }) => pressed && styles.pressed}
    >
      <View style={styles.buttonContainer}>
        <Ionicons name={icon} size={size} color={color} />
      </View>
    </Pressable>
  );
};

export default IconButton;

const styles = StyleSheet.create({
  buttonContainer: {
    borderRadius: 24,
    padding: 6,
    marginHorizontal: 8,
    marginVertical: 2,
  },
  pressed: {
    opacity: 0.75,
  },
});
