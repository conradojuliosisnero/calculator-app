//import liraries
import { globalStyles } from "@/styles/global-styles";
import { Text, type TextProps } from "react-native";

interface Props extends TextProps {
    variant?: 'h1' | 'h2' 
}

// create a component
const ThemeText = ({ children, variant, ...rest }: Props) => {
    return (
      <Text
        {...rest}
        style={[
          { color: "white" },
          variant === "h1" && globalStyles.MainResult,
          variant === "h2" && globalStyles.SubResult,
        ]}
      >
        {children}
      </Text>
    );
};

export default ThemeText;
