import { loadMovenet } from "@/src/ml/movenet";
import { useEffect, useState } from "react";
import { StyleSheet, View } from "react-native";
import {
  Camera,
  useCameraDevice,
  useFrameProcessor,
} from "react-native-vision-camera";

export function PoseCamera() {
  const device = useCameraDevice("front");
  const [isCameraActive, setIsCameraActive] = useState(true);

  const frameProcessor = useFrameProcessor((frame) => {
    console.log("Frame:", frame.width, frame.height);
  }, []);

  useEffect(() => {
    async function init() {
      const model = await loadMovenet();
      console.log("MoveNet Loaded:", model);
    }

    init();
  }, []);

  return device == null ? null : (
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
