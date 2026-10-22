import { Pressable, View, StyleSheet, Image, Text } from "react-native";
import ImageViewModal from "../modal/ImageViewModal";
import { useState } from "react";

export default function DestinationItem(props) {
  const [modalIsVisibile, setModalIsVIsible] = useState(false);

  function viewImageHandler() {
    setModalIsVIsible(true);
  }

  function closeImageHandler() {
    setModalIsVIsible(false);
  }

  return (
    <View
      style={[
        styles.itemContainer,
        { backgroundColor: props.listIndex % 2 == 0 ? "#ccc" : "#fff" },
      ]}
    >
      <Pressable
        style={({ pressed }) => [
          styles.button,
          pressed ? styles.buttonPressed : null,
        ]}
        android_ripple={{ color: "#ccc" }}
        onPress={viewImageHandler}
      >
        <View style={styles.rowContainer}>
          <Image style={styles.image} source={{ uri: props.imageUrl }} />
          <View style={styles.infoContainer}>
            <Text numberOfLines={2} style={styles.name}>
              {props.name}
            </Text>
            <View style={styles.innerRowContainer}>
              <Text numberOfLines={1} style={styles.avgCost}>
                Average Cost: ${props.averageCost}
              </Text>
              <Text numberOfLines={1} style={styles.year}>
                {props.foundedYear}
              </Text>
            </View>
            <Text style={styles.rating}>Rating: {props.rating}/5</Text>
          </View>
        </View>
        <View style={styles.descBox}>
          <Text style={styles.desc}>{props.description}</Text>
        </View>
      </Pressable>

      <ImageViewModal
        isVisible={modalIsVisibile}
        imageUrl={props.imageUrl}
        stringVal={props.stringVal}
        onClose={closeImageHandler}
      />
    </View>
  );
}

const styles = StyleSheet.create({
  itemContainer: {
    paddingHorizontal: 5,
    paddingTop: 3,
    marginBottom: 3,
    borderRadius: 7,
  },
  button: {
    flex: 1,
  },
  buttonPressed: {
    opacity: 0.5,
  },
  rowContainer: {
    height: 100,
    flexDirection: "row",
    marginBottom: 10,
  },
  image: {
    width: "25%",
    height: "100%",
    resizeMode: "contain",
    borderRadius: 15,
    marginRight: 15,
  },
  infoContainer: {
    width: "85%",
    paddingLeft: 20,
  },
  name: {
    fontWeight: "bold",
    textAlign: "left",
    fontSize: 20,
  },
  avgCost: {
    fontSize: 14,
  },
  year: {
    fontSize: 14,
    fontWeight: "bold",
    width: "50%",
  },
  innerRowContainer: {
    width: "85%",
    flexDirection: "row",
    alignItems: "center",
  },
  rating: {
    fontSize: 13,
    fontStyle: "italic",
  },
  descBox: {
    flex: 1,
  },
  desc: {
    fontSize: 12,
    padding: 3,
    marginBottom: 3,
  },
});
