import { Text, View, Pressable, StyleSheet } from "react-native";

export default function Title(props) {
    return <Text style={styles.title}>{props.children}</Text>;
}

const styles = StyleSheet.create({
    title: {
        fontSize: 45,
        color: Colors.primary300,
        textShadowColor: Colors.accent500,
        textShadowRadius: 25,
        textAlign: 'center',
        fontFamily: "cursive1",
        padding: 1
    }
})