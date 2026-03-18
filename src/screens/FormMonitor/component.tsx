import { useState } from "react";
import { StyleSheet, View } from "react-native";
import { Camera, useCameraDevice } from "react-native-vision-camera";

export function PoseCamera() {
  const device = useCameraDevice("front");
  const [isCameraActive, setIsCameraActive] = useState(true);

  if (!device) return null;

  return (
    <View style={style.Container}>
      <Camera style={style.Camera} device={device} isActive={isCameraActive} />
    </View>
  );
}

const style = StyleSheet.create({
  Container: {
    flex: 1,
  },
  Camera: {
    flex: 1,
  },
});
