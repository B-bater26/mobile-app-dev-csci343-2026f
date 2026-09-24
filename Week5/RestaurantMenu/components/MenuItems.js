import {Text, View, Image, StyleSheet} from "react-native";

export default function MenuItem(props) {
    return (
        <View style={styles.itemContainer}>
            <View style={styles.titleContainer}>
                <Text style={styles.title}>{props.name}</Text>
            </View>
            <View style={styles.imageContainer}>
                <Image style={styles.image} source={props.image} />
            </View>
            <View style={styles.descContainer}>
                <Text style={styles.desc}>{props.desc}</Text>
            </View>
        </View>
    );
    
}

const styles = StyleSheet.create({
    itemContainer: {
        marginBottom: 20
    },
    titleContainer: {
        borderWidth: 3,
        borderRadius: 5,
        backgroundColor: "#7de6f8"
    },
    title : {
        fontSize: 30,
        textAlign: "center"
    },
    imageContainer: {
        alignItems: "center",
        borderWidth: 3,
        borderRadius: 9,
        backgroundColor: "black"
    },
    image: {
        width: "100%",
        height: 250,
        resizeMode: "cover",
    },
    descContainer: {
        borderWidth: 3,
        borderRadius: 5,
        backgroundColor: "#7de6f8"
    },
    desc: {
        fontSize: 25,
        textAlign: "center"
    }
})