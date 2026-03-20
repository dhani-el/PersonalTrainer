import colors from "@/constants/colors";
import { height, width } from "@/constants/size";
import Entypo from "@expo/vector-icons/Entypo";
import { useNavigation } from "@react-navigation/native";
import type { NativeStackNavigationProp } from "@react-navigation/native-stack";
import { Text, View } from "react-native";
import { OtpInput } from "react-native-otp-entry";
import { SafeAreaProvider, SafeAreaView } from "react-native-safe-area-context";
import type { RootStackParamList } from "../../navigation/RootNavigator";

export default function OtpScreen() {
  const navigation =
    useNavigation<NativeStackNavigationProp<RootStackParamList>>();
  return (
    <SafeAreaProvider>
      <SafeAreaView>
        <View
          style={{
            width,
            height,
            backgroundColor: colors.primaryBackGround,
            padding: 16,
          }}
        >
          <View
            style={{
              flexDirection: "row",
              justifyContent: "space-between",
              alignItems: "center",
            }}
          >
            <View
              style={{ flexDirection: "row", gap: 16, alignItems: "center" }}
            >
              <Entypo
                name="chevron-left"
                size={24}
                color={colors.primaryText}
              />
              <Text
                style={{
                  color: colors.accent,
                  fontFamily: "Bebas",
                  fontSize: 20,
                }}
              >
                Verify your identify
              </Text>
            </View>
            <Entypo name="menu" size={24} color={colors.primaryText} />
          </View>

          <View style={{ gap: 8, marginTop: 72 }}>
            <Text
              style={{
                color: colors.primaryText,
                fontFamily: "Bebas",
                fontSize: 20,
              }}
            >
              Enter the 6-digit code sent to your email address to reset your
              password.
            </Text>
            <Text
              style={{
                color: colors.secondaryText,
                fontFamily: "Inter",
                fontSize: 14,
                marginBottom: 20,
              }}
            >
              This helps us verify your identity and ensure the security of your
              account.
            </Text>
            <OtpInput
              numberOfDigits={6}
              focusColor={colors.accent}
              placeholder="------"
              blurOnFilled={true}
              type="numeric"
              secureTextEntry={false}
              focusStickBlinkingDuration={500}
              onFocus={() => console.log("Focused")}
              onBlur={() => console.log("Blurred")}
              onTextChange={(text) => console.log(`text changed to ${text}`)}
              onFilled={() => {}}
              textInputProps={{
                accessibilityLabel: "One-Time Password",
                cursorColor: colors.accent,
                selectionColor: colors.accent,
              }}
              textProps={{
                accessibilityRole: "text",
                accessibilityLabel: "OTP digit",
                allowFontScaling: false,
                style: {
                  color: colors.primaryText,
                },
              }}
            />
            <View
              style={{
                flexDirection: "row",
                gap: 4,
                justifyContent: "center",
                marginTop: 16,
              }}
            >
              <Text
                style={{
                  color: colors.primaryText,
                  fontFamily: "Inter",
                  fontSize: 14,
                }}
              >
                Didn't receive the code?
              </Text>
              <Text
                style={{
                  color: colors.accent,
                  fontFamily: "Inter",
                  fontSize: 14,
                  textDecorationLine: "underline",
                  fontWeight: "600",
                }}
              >
                Resend?
              </Text>
            </View>
          </View>
        </View>
      </SafeAreaView>
    </SafeAreaProvider>
  );
}
