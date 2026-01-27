//import liraries
import { Colors } from "@/constants/theme";
import { globalStyles } from "@/styles/global-styles";
import { Text, Pressable } from "react-native";

interface ThemeButtonProps {
    label: string;
    color?: string;
    blackText?: boolean;
    onPress: () => void;
}

const ThemeButton = ({
    label,
    color,
    blackText = false,
    onPress,
}: ThemeButtonProps) => {
    return (
        <Pressable
            style={({ pressed }) => ({
                ...globalStyles.Button,
                backgroundColor: color || Colors.buttonBackground,
                opacity: pressed ? 0.8 : 1,
            })}
            onPress={onPress}
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
