import { View } from "react-native";
import { globalStyles } from "@/styles/global-styles";
import ThemeText from "@/components/ThemeText";
import ThemeButton from "@/components/ThemeButton";
import { Colors } from "@/constants/theme";

const Calculator = () => {
  return (
    <View style={globalStyles.CalculatorContainer}>
      {/* box reslts  */}
      <View style={{ paddingHorizontal: 20, marginBottom: 100 }}>
        <ThemeText variant="h1" style={globalStyles.MainResult}>
          50 x 50
        </ThemeText>
        <ThemeText variant="h2">{25000}</ThemeText>
      </View>

      {/* buttons grid  */}

      <View style={globalStyles.row}>
        <ThemeButton
          blackText
          color={Colors.textSecondary}
          onPress={() => console.log("C")}
          label="C"
        />
        <ThemeButton
          blackText
          color={Colors.textSecondary}
          onPress={() => console.log("+/-")}
          label="+/-"
        />
        <ThemeButton
          blackText
          color={Colors.textSecondary}
          onPress={() => console.log("del")}
          label="del"
        />
        <ThemeButton
          color={Colors.orange}
          onPress={() => console.log("÷")}
          label="÷"
        />
      </View>
      <View style={globalStyles.row}>
        <ThemeButton
          onPress={() => console.log("7")}
          label="7"
        />
        <ThemeButton
          onPress={() => console.log("8")}
          label="8"
        />
        <ThemeButton
          onPress={() => console.log("9")}
          label="9"
        />
        <ThemeButton
          color={Colors.orange}
          onPress={() => console.log("x")}
          label="x"
        />
      </View>
    </View>
  );
};

export default Calculator;
