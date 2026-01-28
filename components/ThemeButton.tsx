//import liraries
import { Colors } from "@/constants/theme";
import { globalStyles } from "@/styles/global-styles";
import { Text, Pressable } from "react-native";
import * as Haptics from "expo-haptics";

interface ThemeButtonProps {
  label: string;
  color?: string;
  doubleSize?: boolean;
  blackText?: boolean;
  onPress: () => void;
}

const ThemeButton = ({
  label,
  color,
  doubleSize = false,
  blackText = false,
  onPress,
}: ThemeButtonProps) => {
  return (
    <Pressable
      style={({ pressed }) => ({
        ...globalStyles.Button,
        backgroundColor: color || Colors.buttonBackground,
        opacity: pressed ? 0.8 : 1,
        width: doubleSize ? 160 : 70,
      })}
      onPress={() => {
        Haptics.selectionAsync();
        onPress();
      }}
    >
      <Text
        style={{
          ...globalStyles.ButtonText,
          color: blackText ? "black" : "white",
        }}
      >
        {label}
      </Text>
    </Pressable>
  );
};

export default ThemeButton;
