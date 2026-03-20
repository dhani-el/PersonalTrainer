import { Dimensions, StyleSheet, View } from "react-native";
import { useSafeAreaInsets } from "react-native-safe-area-context";
import colors from "../../../constants/colors";
import { PoseCamera } from "./component";

const screenDimension = Dimensions.get("screen");
const height = screenDimension.height;
const width = screenDimension.width;

export default function FormCheck() {
  const { top, bottom } = useSafeAreaInsets();

  return (
    <View
      style={{ ...style.container, paddingTop: top, paddingBottom: bottom + 6 }}
    >
      <PoseCamera />
    </View>
  );
}

const style = StyleSheet.create({
  container: {
    // paddingTop:
    backgroundColor: colors.primaryBackGround,
    height: height,
  },
});
