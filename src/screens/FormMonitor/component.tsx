import { useState } from "react";
import { Platform, StyleSheet, View } from "react-native";
import { useTensorflowModel } from "react-native-fast-tflite";
import {
  Camera,
  useCameraDevice,
  useFrameProcessor,
} from "react-native-vision-camera";

import { MOVENET_MODEL } from "@/src/ml/movenet";

export function PoseCamera() {
  const device = useCameraDevice("front");
  const [isCameraActive] = useState(true);

  const model = useTensorflowModel(MOVENET_MODEL);

  const frameProcessor = useFrameProcessor(
    (frame) => {
      "worklet";

      if (model.state !== "loaded") return;

      model.model.runSync([]);
    },
    [model],
  );

  if (Platform.OS === "web") return <View />;
  if (!device) return <View />;

  return (
    <View style={style.Container}>
      <Camera
        style={style.Camera}
        device={device}
        frameProcessor={frameProcessor}
        isActive={isCameraActive}
      />
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
