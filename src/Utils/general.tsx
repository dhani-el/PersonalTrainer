import { View } from "react-native";

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
