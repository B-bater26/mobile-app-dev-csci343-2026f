import { useNavigation } from "@react-navigation/native";
import { View, Text, StyleSheet, Image, Pressable } from "react-native";
import Colors from "../../constants/colors";

export default function NewsItem(props) {
  const navigation = useNavigation();

  function selectedListHandler() {
    navigation.navigate("NewsDetail", {
      id: props.id,
    });
  }

  return (
    <View
      style={[
        styles.itemContainer,
        { backGroundColor: props.listIndex % 2 == 0 ? "#CCC" : "#fff" },
      ]}
    >
      <Pressable onPress={selectedListHandler} >
        <View style={styles.imageContainer}>
          <Image style={styles.image} source={{ uri: props.imageUrl }} />
        </View>
        <View style={styles.infoContainer}>
          <Text style={styles.headline}>{props.headline}</Text>
          <Text style={styles.space}>
            {props.date}
          </Text>
          <Text style={styles.source}>{props.author} | {props.agency}</Text>
        </View>
      </Pressable>
    </View>
  );
}

const styles = StyleSheet.create({
  itemContainer: {
    paddingHorizontal: 5,
    paddingTop: 5,
    marginBottom: 30,
    borderRadius: 7,
    backgroundColor: Colors.primary300o5
  },
  imageContainer: {
    marginVertical: 10,
    height: 300,
  },
  image: {
    height: "100%",
    resizeMode: "cover",
    borderRadius: 7
  },
  infoContainer: {
    flex: 1,
    alignItems: "center",
    color: "white"
  },
  headline: {
    fontSize: 35,
    fontFamily: "Normal",
    paddingBottom: 2,
    color: "white"
  },
  space: {
    fontSize: 25,
    fontFamily: "Light",
    paddingBottom: 5,
    color: "white"
  },
  source: {
    textAlign: "center",
    width: "100%",
    fontSize: 15,
    fontFamily: "Light",
    paddingBottom: 10,
    color: "white"
  }
});
