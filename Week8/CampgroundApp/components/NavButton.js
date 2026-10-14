import {
  Text,
  View,
  Pressable,
  StyleSheet,
  useWindowDimensions,
} from "react-native";
import Colors from "../constants/colors";

export default function NaVButton(props) {
  const { width, height } = useWindowDimensions();
  return (
    <Pressable
      onPress={props.onPress}
      style={({ pressed }) => pressed && styles.pressedItem}
    >
      <View style={styles.buttonContainer}>
        <View style={styles.textContainer}>
          <Text style={[styles.text, { fontSize: width * 0.05 }]}>
            {props.children}
          </Text>
        </View>
      </View>
    </Pressable>
  );
}

const styles = StyleSheet.create({
  buttonContainer: {
    justifyContent: "center",
    alignItems: "center",
    height: 75,
    width: 1000,
    maxWidth: "70%",
    margin: 8,
    borderRadius: 6,
    backgroundColor: Colors.primary500,
    borderWidth: 2,
    borderRadius: 300,
    marginHorizontal: 10,
    marginVertical: 10,
  },
  pressedItem: {
    opacity: 0.5,
  },
  text: {
    padding: 8,
    fontSize: 25,
    textAlign: "center",
    fontFamily: "Text",
    color: Colors.accent500,
  },
});
