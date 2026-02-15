import { Dimensions, StyleSheet, View } from "react-native";
import { SafeAreaProvider, SafeAreaView } from "react-native-safe-area-context";
import { Logo } from "./components";

const screenDimension = Dimensions.get("screen");
const height = screenDimension.height;
const width = screenDimension.width;

export default function LoginScreen() {
  return (
    <SafeAreaProvider>
      <SafeAreaView>
        <View style={style.mainView}>
          <Logo />
        </View>
      </SafeAreaView>
    </SafeAreaProvider>
  );
}

const style = StyleSheet.create({
  mainView: {
    width,
    height,
    padding: 16,
  },
});
