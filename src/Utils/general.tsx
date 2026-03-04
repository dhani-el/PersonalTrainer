import Ionicons from "@expo/vector-icons/Ionicons";
import { useFonts } from "expo-font";
import {
  Dimensions,
  Image,
  StyleSheet,
  Text,
  TextInput,
  TouchableOpacity,
  View,
} from "react-native";
import Colors from "../../constants/colors";

const wordMarkLogo = require("../../assets/logo/abstract_markcrop.png");

const screenDimension = Dimensions.get("window");
const height = screenDimension.height;
const width = screenDimension.width;

export function Radio({
  color,
  size,
  handleClick,
}: {
  color: string;
  size: number;
  handleClick: () => void;
}) {
  return (
    <View
      style={{
        width: size,
        height: size,
        borderRadius: 999,
        backgroundColor: color,
      }}
      onTouchStart={handleClick}
    ></View>
  );
}

export function Logo() {
  const [loaded] = useFonts({
    Bebas: require("../../assets/fonts/BebasNeue.ttf"),
    Inter: require("../../assets/fonts/InterRegular.ttf"),
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
      <Text style={{ fontFamily: "Bebas", fontSize: 32, color: Colors.accent }}>
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
    <View style={{ gap: 4 }}>
      <Text
        style={{ color: Colors.primaryText, fontFamily: "Bebas", fontSize: 16 }}
      >
        {title}
      </Text>
      <TextInput
        placeholder={placeHolder}
        style={{
          color: Colors.secondaryText,
          padding: 16,
          backgroundColor: Colors.primaryBackGround,
          borderRadius: 8,
          borderColor: Colors.accent,
          borderStyle: "solid",
          borderWidth: 1,
          fontFamily: "Inter",
          fontWeight: "600",
        }}
      />
    </View>
  );
}

export function Button({
  title,
  handleClick,
  Icon,
  iconPosition = "left",
  variant = "primary",
}: {
  title: string;
  handleClick: () => void;
  Icon?: React.ComponentProps<typeof Ionicons>["name"];
  iconPosition?: "left" | "right";
  variant?: "primary" | "secondary";
}) {
  return (
    <TouchableOpacity onPress={handleClick}>
      <View
        style={{
          padding: 8,
          backgroundColor:
            variant === "primary" ? Colors.accent : Colors.primaryBackGround,
          borderRadius: 8,
          borderStyle: "solid",
          borderWidth: variant === "primary" ? 0 : 1,
          borderColor: Colors.accent,
        }}
      >
        <Text
          style={{
            color:
              variant === "primary" ? Colors.accentText : Colors.secondaryText,
            fontFamily: "Bebas",
            fontWeight: "600",
            fontSize: 24,
            textAlign: "center",
            gap: 16,
            display: "flex",
            flexDirection: iconPosition === "left" ? "row" : "row-reverse",
            alignItems: "center",
            justifyContent: "center",
          }}
        >
          {`${title}   `}
          {Icon ? (
            <Ionicons
              name={Icon}
              size={24}
              color={
                variant === "primary" ? Colors.accentText : Colors.secondaryText
              }
            />
          ) : null}
        </Text>
      </View>
    </TouchableOpacity>
  );
}
export function Line({ width }: { width: number }) {
  return (
    <View style={{ width, height: 1, backgroundColor: Colors.secondaryText }} />
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
