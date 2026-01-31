import { View } from "react-native";
import { globalStyles } from "@/styles/global-styles";
import ThemeText from "@/components/ThemeText";
import ThemeButton from "@/components/ThemeButton";
import { Colors } from "@/constants/theme";
import { useCalculator } from "@/hooks/useCalculator";

const Calculator = () => {
  const {
    formula,
    prevNumber,
    buildNumber,
    clean,
    toggleSign,
    deleteLastDigit,
    divideOperation,
    multiplyOperation,
    subtractOperation,
    addOperation,
    calculateResult,
  } = useCalculator();

  return (
    <View style={globalStyles.CalculatorContainer}>
      {/* box reslts  */}
      <View style={{ paddingHorizontal: 20, marginBottom: 100 }}>
        <ThemeText variant="h1" style={globalStyles.MainResult}>
          {formula}
        </ThemeText>
        {formula === prevNumber ? (
          <ThemeText variant="h2"></ThemeText>
        ) : (
          <ThemeText variant="h2">{prevNumber}</ThemeText>
        )}
      </View>

      {/* buttons grid  */}

      <View style={globalStyles.row}>
        <ThemeButton
          blackText
          color={Colors.textSecondary}
          onPress={() => clean()}
          label="C"
        />
        <ThemeButton
          blackText
          color={Colors.textSecondary}
          onPress={() => toggleSign()}
          label="+/-"
        />
        <ThemeButton
          blackText
          color={Colors.textSecondary}
          onPress={() => deleteLastDigit()}
          label="del"
        />
        <ThemeButton
          color={Colors.orange}
          onPress={() => divideOperation()}
          label="÷"
        />
      </View>
      <View style={globalStyles.row}>
        <ThemeButton onPress={() => buildNumber("7")} label="7" />
        <ThemeButton onPress={() => buildNumber("8")} label="8" />
        <ThemeButton onPress={() => buildNumber("9")} label="9" />
        <ThemeButton
          color={Colors.orange}
          onPress={() => multiplyOperation()}
          label="x"
        />
      </View>
      <View style={globalStyles.row}>
        <ThemeButton onPress={() => buildNumber("4")} label="4" />
        <ThemeButton onPress={() => buildNumber("5")} label="5" />
        <ThemeButton onPress={() => buildNumber("6")} label="6" />
        <ThemeButton
          color={Colors.orange}
          onPress={() => subtractOperation()}
          label="-"
        />
      </View>
      <View style={globalStyles.row}>
        <ThemeButton onPress={() => buildNumber("1")} label="1" />
        <ThemeButton onPress={() => buildNumber("2")} label="2" />
        <ThemeButton onPress={() => buildNumber("3")} label="3" />
        <ThemeButton
          color={Colors.orange}
          onPress={() => addOperation()}
          label="+"
        />
      </View>
      <View style={globalStyles.row}>
        <ThemeButton doubleSize onPress={() => buildNumber("0")} label="0" />
        <ThemeButton onPress={() => buildNumber(".")} label="." />
        <ThemeButton
          color={Colors.orange}
          onPress={() => calculateResult()}
          label="="
        />
      </View>
    </View>
  );
};

export default Calculator;
