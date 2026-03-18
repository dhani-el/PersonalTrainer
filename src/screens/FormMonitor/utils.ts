import { useFrameProcessor } from "react-native-vision-camera";

const frameProcessor = useFrameProcessor((frame) => {
  "worklet";

  // frame -> tensor
  // tensor -> movenet inference
  // return keypoints
}, []);

type jointPoint = { x: number; y: number };
function calculateElbowAngle(a: jointPoint, b: jointPoint, c: jointPoint) {
  const ab = [a.x - b.x, a.y - b.y];
  const cb = [c.x - b.x, c.y - b.y];

  const dot = ab[0] * cb[0] + ab[1] * cb[1];
  const magAB = Math.sqrt(ab[0] ** 2 + ab[1] ** 2);
  const magCB = Math.sqrt(cb[0] ** 2 + cb[1] ** 2);

  const angle = Math.acos(dot / (magAB * magCB));

  return (angle * 180) / Math.PI;
}
