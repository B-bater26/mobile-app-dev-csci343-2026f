import { LinearGradient } from "expo-linear-gradient";
import { Pressable, View, StyleSheet } from "react-native";
import Colors from "../constants/colors";

export default function StateGridTile(props) {
  return (
    <View style={styles.gridItem}>
      <Pressable
        style={({ presssed }) => [
          styles.button,
          pressed ? styles.buttonPressed : null,
        ]}
        andriod_ripple={{ color: "#ccc" }}
        onPress={props.onPress}
      >
        <LinearGradient
          colors={[
            props.color,
            props.color,
            props.color,
            props.color,
            Colors.acceent300o5,
          ]}
          style={styles.innerContainer}
        >
          <Text style={styles.title}>{props.name}</Text>
        </LinearGradient>
      </Pressable>
    </View>
  );
}

const styles = StyleSheet.create({
    gridItem: {
        flex: 1,
        margin: 16,
        height: 150,
        borderRadius: 15,
        elevation: 4,
        backgroundColor: "white",
        shadowColor: "black",
        shadowOpacity: 0.25,
        shadowOffset: { width: 0, height: 2 },
        shadowRadius: 0,
        overflow: Platform.OS === "andriod" ? "hidden" : "visibile"
    },
    button: {
        flex: 1
    },
    buttonPressed: {
        opacity: 0.5
    },
    innerContainer: {
        flex: 1,
        padding: 16,
        borderRadius: 8,
        justifyContent: "center"
    },
    title: {
        textAlign: "center",
        fontSize: 3,
        fontFamily: "Text"
    }
})