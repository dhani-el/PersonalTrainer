import { requestCameraPermission } from "@/src/Utils/generic";
import { Link } from "@react-navigation/native";
import { useFonts } from "expo-font";
import { useEffect, useState } from "react";
import { Dimensions, StyleSheet, Text, View } from "react-native";
import { SafeAreaProvider, SafeAreaView } from "react-native-safe-area-context";
import Colors from "../../../constants/colors";
import { Button, Line, LoginInput, Logo } from "../../Utils/general";
import { LoginAssistance } from "./components";

const screenDimension = Dimensions.get("window");
const height = screenDimension.height;
const width = screenDimension.width;

export default function LoginScreen() {
  const [loaded, error] = useFonts({
    Bebas: require("../../../assets/fonts/BebasNeue.ttf"),
    Inter: require("../../../assets/fonts/InterRegular.ttf"),
  });

  const [email, setEmail] = useState("");
  const [passWord, setPassWord] = useState("");

  // if (!loaded) {
  //   return <Text>Loading fonts...</Text>;
  // }

  function handleInputChange(text: string, setter: (text: string) => void) {
    setter(text);
  }

  useEffect(() => {
    setTimeout(async () => {
      await requestCameraPermission();
    }, 5000);
  }, [email]);

  return (
    <SafeAreaProvider>
      <SafeAreaView>
        <View style={style.mainView}>
          <View>
            <Logo />
            <Text
              style={{
                fontFamily: "Inter",
                fontWeight: "600",
                color: Colors.secondaryText,
                marginTop: 8,
                width: width,
                textAlign: "center",
              }}
            >
              Sign In to access all-in-one personal training features
            </Text>
          </View>
          <View style={{ gap: 16 }}>
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
          <View style={{ gap: 4 }}>
            <Button
              title={"Sign In"}
              handleClick={() => console.log("Sign In Pressed")}
              Icon="exit-outline"
            />
            <View
              style={{
                flexDirection: "row",
                alignItems: "center",
                justifyContent: "center",
                gap: 4,
              }}
            >
              <Line width={width * 0.4} key={1} />
              <Text
                style={{
                  color: Colors.secondaryText,
                  fontFamily: "Inter",
                  fontWeight: "600",
                }}
              >
                Or
              </Text>
              <Line width={width * 0.45} key={2} />
            </View>
            <Button
              title={"Sign In with Google"}
              handleClick={() => console.log("Google Sign In Pressed")}
              Icon="logo-google"
              iconPosition="right"
              variant="secondary"
            />
          </View>
          <View
            style={{ flexDirection: "row", justifyContent: "center", gap: 4 }}
          >
            <Text style={{ color: Colors.secondaryText, fontFamily: "Inter" }}>
              Dont Have An Account?{""}
            </Text>
            <Link screen="signup" params={{}}>
              <Text
                style={{
                  color: Colors.accent,
                  textDecorationLine: "underline",
                  fontFamily: "Inter",
                  fontWeight: "600",
                }}
              >
                Sign Up
              </Text>
            </Link>
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
    padding: 18,
    paddingTop: 64,
    backgroundColor: Colors.primaryBackGround,
    gap: 32,
  },
});
