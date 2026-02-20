import { useFonts } from "expo-font";
import { Image, StyleSheet, Text, View } from "react-native";
const wordMarkLogo = require("../../../assets/logo/abstract_mark.png");

export function Logo() {
  const [loaded, error] = useFonts({
    Bebas: require("../../../assets/fonts/BebasNeue.ttf"),
    Inter: require("../../../assets/fonts/InterRegular.ttf"),
  });

  if (!loaded) {
    return <Text>Loading fonts...</Text>;
  }

  return (
    <View>
      <View style={{ width: 150, height: 50 }}>
        <Image
          style={{ width: 150, height: 50, resizeMode: "contain" }}
          source={wordMarkLogo}
        />
      </View>
      <Text style={{ fontFamily: "Bebas" }}>FORMCHECK</Text>
    </View>
  );
}

const style = StyleSheet.create({
  logoView: {},
});
