import { useNavigation } from "@react-navigation/native";
import { View, Text, StyleSheet, Image, Pressable } from "react-native";
import Colors from "../../constants/colors";

export default function MemoryItem(props) {
  // Navigation Object for navigating
  const navigation = useNavigation();

  // Selected memory handling for navigating
  function selectedListHandler() {
    navigation.navigate("MemoryDetail", {
      id: props.id,
    });
  }

  return (
    <View
      style={[
        styles.itemContainer,
        { backgroundColor: props.listIndex % 2 == 0 ? "#dfc18a" : "#e9d9bc" },
      ]}
    >
      <Pressable onPress={selectedListHandler}>
        <View style={styles.imageContainer}>
          <Image
            style={styles.image}
            source={{
              uri: props.imageUrl,
            }}
          />
        </View>
        <View style={styles.infoContainer}>
          <Text style={styles.header}>{props.header}</Text>
          <Text style={styles.date}>{props.date}</Text>
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
    backgroundColor: Colors.primary300o5,
  },
  imageContainer: {
    marginVertical: 10,
    height: 300,
  },
  image: {
    height: "100%",
    resizeMode: "cover",
    borderRadius: 7,
  },
  infoContainer: {
    flex: 1,
    alignItems: "center",
    color: "white",
  },
  header: {
    fontSize: 35,
    fontFamily: "Normal",
    paddingBottom: 2,
    color: "white",
  },
  date: {
    fontSize: 25,
    fontFamily: "Normal",
    paddingBottom: 5,
    color: "white",
  },
});
