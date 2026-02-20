import { useFonts } from "expo-font";
import { useState } from "react";
import { Dimensions, StyleSheet, Text, View } from "react-native";
import { SafeAreaProvider, SafeAreaView } from "react-native-safe-area-context";
import { LoginAssistance, LoginInput, Logo } from "./components";

const screenDimension = Dimensions.get("window");
const height = screenDimension.height;
const width = screenDimension.width;

export default function LoginScreen() {
  const [loaded, error] = useFonts({
    Bebas: require("../../../assets/fonts/BebasNeue.ttf"),
    Inter: require("../../../assets/fonts/InterRegular.ttf"),
  });

  if (!loaded) {
    return <Text>Loading fonts...</Text>;
  }

  const [email, setEmail] = useState("");
  const [passWord, setPassWord] = useState("");

  function handleInputChange(text: string, setter: (text: string) => void) {
    setter(text);
  }

  return (
    <SafeAreaProvider>
      <SafeAreaView>
        <View style={style.mainView}>
          <Logo />
          <Text
            style={{
              fontFamily: "Inter",
              color: "white",
              marginTop: 16,
              width: (width * 90) / 100,
            }}
          >
            Sign In to access all-in-one Personal training features
          </Text>
          <View>
            <LoginInput
              handleChange={(text) => handleInputChange(text, setEmail)}
              placeHolder={"Enter Your Email Adress"}
              title={"Email Address"}
              key={"email"}
            />
            <LoginInput
              handleChange={(text) => handleInputChange(text, setPassWord)}
              placeHolder={"Enter Your Password"}
              title={"Password"}
              key={"password"}
            />
            <LoginAssistance />
          </View>
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
    paddingTop: 64,
    backgroundColor: "black",
  },
});
