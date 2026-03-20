import Colors from "@/constants/colors";
import { height, width } from "@/constants/size";
import { Button, LoginInput, Logo } from "@/src/Utils/general";
import { Link } from "@react-navigation/native";
import { Text, View } from "react-native";
import { SafeAreaProvider, SafeAreaView } from "react-native-safe-area-context";

export default function SignupScreen() {
  return (
    <SafeAreaProvider>
      <SafeAreaView>
        <View
          style={{
            width,
            height,
            backgroundColor: Colors.primaryBackGround,
            padding: 16,
            gap: 64,
            paddingTop: 32,
          }}
        >
          <Logo />
          <View style={{ gap: 16 }}>
            <LoginInput
              title="Email Address"
              placeHolder="Enter Your Email Adress"
              handleChange={() => {}}
            />
            <LoginInput
              title="Password"
              placeHolder="Enter Your Password"
              handleChange={() => {}}
            />
            <LoginInput
              title="Confirm Password"
              placeHolder="Confirm Your Password"
              handleChange={() => {}}
            />
            <View style={{ gap: 8 }}>
              <Button title="Sign Up" handleClick={() => {}} />
              <View
                style={{
                  flexDirection: "row",
                  alignItems: "center",
                  justifyContent: "center",
                }}
              >
                <Text
                  style={{ color: Colors.primaryText, fontFamily: "Inter" }}
                >
                  Already have an account?{" "}
                </Text>
                <Link screen="" params={{}}>
                  <Text
                    style={{
                      color: Colors.accent,
                      fontFamily: "Inter",
                      fontWeight: "600",
                    }}
                  >
                    Sign In
                  </Text>
                </Link>
              </View>
            </View>
          </View>
        </View>
      </SafeAreaView>
    </SafeAreaProvider>
  );
}
