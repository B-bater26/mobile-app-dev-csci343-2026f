import { Text, View, Pressable, StyleSheet } from "react-native";



export default function NaVButton(props) {
    return (
        <Pressable
        android_ripple={{color: Colors.accent800}}
        onPress={props.onNext}
        style={({pressed}) => pressed && styles.pressedItem}
        >
            <View style={styles.buttonContainer}>
                <View style={styles.textContainer}>
                    <Text style={styles.text}>{props.children}</Text>
                </View>
            </View>
        </Pressable>
    )
}

const styles = StyleSheet.create({
    buttonContainer: {
        justifyContent: "center",
        alignItems: "center",
        height: 75,
        width: 150,
        margin: 8,
        borderRadius: 6,
        backgroundColor: Colors.accent500
    },
    pressedItem: {
        opacity: 0.8
    },
    text: {
        padding: 1,
        fontSize: 25,
        textAlign: "center",
        fontFamily: "fuzzy",
        color: Colors.primary300
    }
})