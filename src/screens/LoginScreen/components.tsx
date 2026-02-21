import { Radio } from "@/src/Utils/general";
import { Text, View } from "react-native";
import Colors from "../../../constants/colors";

export function LoginAssistance() {
  return (
    <View style={{ flexDirection: "row", justifyContent: "space-between" }}>
      <View style={{ flexDirection: "row" }}>
        <Radio color="white" size={24} handleClick={() => {}} />
        <Text style={{ color: "white", fontFamily: "Inter", marginLeft: 8 }}>
          Keep me signed in
        </Text>
      </View>
      <Text
        style={{
          color: Colors.accent,
          fontFamily: "Inter",
          textDecorationLine: "underline",
        }}
      >
        Forgot Password?
      </Text>
    </View>
  );
}
