import { Ionicons } from "@expo/vector-icons";
import { Pressable } from "react-native";
import Colors from "../constants/colors";

export default function BookmarkButton(props) {
  // If it is a favorite, fill the icon; otherwise, unfill it
  if (props.isFavorite) {
    return (
      <Pressable onPress={props.onPress}>
        <Ionicons name="bookmark" size={30} color={Colors.accent500} />
      </Pressable>
    );
  } else {
    return (
      <Pressable onPress={props.onPress}>
        <Ionicons name="bookmark-outline" size={30} color={Colors.accent500} />
      </Pressable>
    );
  }
}
