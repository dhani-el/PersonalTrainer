import { Radio } from "@/src/Utils/general";
import { useFonts } from "expo-font";
import {
  Dimensions,
  Image,
  StyleSheet,
  Text,
  TextInput,
  View,
} from "react-native";
const wordMarkLogo = require("../../../assets/logo/abstract_markcrop.png");

const screenDimension = Dimensions.get("window");
const height = screenDimension.height;
const width = screenDimension.width;

export function Logo() {
  const [loaded, error] = useFonts({
    Bebas: require("../../../assets/fonts/BebasNeue.ttf"),
    Inter: require("../../../assets/fonts/InterRegular.ttf"),
  });

  if (!loaded) {
    return <Text>Loading fonts...</Text>;
  }

  return (
    <View style={style.logoView}>
      <View style={{ width: 150, height: 50 }}>
        <Image
          style={{ width: 150, height: 50, resizeMode: "contain" }}
          source={wordMarkLogo}
        />
      </View>
      <Text style={{ fontFamily: "Bebas", fontSize: 32, color: "#74ee15" }}>
        FORMCHECK
      </Text>
    </View>
  );
}

export function LoginInput({
  title,
  placeHolder,
  handleChange,
}: {
  title: string;
  placeHolder: string;
  handleChange: (text: string) => void;
}) {
  return (
    <View style={{}}>
      <Text style={{ color: "#74ee15", fontFamily: "Bebas" }}>{title}</Text>
      <TextInput
        placeholder={placeHolder}
        style={{
          color: "white",
          padding: 12,
          backgroundColor: "#1a1a1a",
          borderRadius: 8,
          marginTop: 16,
          borderColor: "white",
          borderStyle: "solid",
          borderWidth: 1,
        }}
      />
    </View>
  );
}

export function LoginAssistance() {
  return (
    <View>
      <View>
        <Radio color="white" size={24} handleClick={() => {}} />
        <Text style={{ color: "white", fontFamily: "Inter", marginLeft: 8 }}>
          Keep me signed in
        </Text>
      </View>
    </View>
  );
}

const style = StyleSheet.create({
  logoView: {
    width,
    alignItems: "center",
    justifyContent: "center",
    gap: 8,
  },
});
