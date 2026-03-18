import { loadTensorflowModel } from "react-native-fast-tflite";

export async function loadMovenet() {
  const model = await loadTensorflowModel(
    require("../../assets/models/movenet.tflite"),
  );
  return model;
}
