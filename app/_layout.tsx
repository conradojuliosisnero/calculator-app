import { Slot } from "expo-router";
import { View, StatusBar, Platform } from "react-native";
import { useFonts } from "expo-font";
import { globalStyles } from "@/styles/global-styles";
import * as NavigationBar from "expo-navigation-bar";

const isAndroid = Platform.OS === "android";

if (isAndroid) {
  NavigationBar.setBackgroundColorAsync("#000000");
}

const RootLayout = () => {
  const [loaded, error] = useFonts({
    SpaceMono: require("../assets/fonts/SpaceMono-Regular.ttf"),
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
