import { Slot } from "expo-router";
import { View, StatusBar } from "react-native";
import { useFonts } from "expo-font";
import { globalStyles } from "@/styles/global-styles";

const RootLayout = () => {
  const [loaded,error] = useFonts({
    "SpaceMono": require("../assets/fonts/SpaceMono-Regular.ttf"),
  });

  if (!loaded) {
    return null;
  }

  return (
    <View style={globalStyles.container}>
      <Slot />
      <StatusBar barStyle="light-content" />
    </View>
  );
};

export default RootLayout;
