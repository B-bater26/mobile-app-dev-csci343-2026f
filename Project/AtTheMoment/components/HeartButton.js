import { Ionicons } from "@expo/vector-icons";
import { Pressable } from "react-native";
import Colors from "../constants/colors";

export default function HeartButton(props) {
  // Control the appearance of the Heart Button
  if (props.isCore) {
    return (
      <Pressable onPress={props.onPress}>
        <Ionicons name="heart" size={30} color="red" />
      </Pressable>
    );
  } else {
    return (
      <Pressable onPress={props.onPress}>
        <Ionicons name="heart-outline" size={30} color="red" />
      </Pressable>
    );
  }
}
